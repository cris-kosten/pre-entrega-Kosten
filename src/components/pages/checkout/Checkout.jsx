import { useContext, useState } from "react"
import { Button, TextField } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Link } from "react-router-dom";

const Checkout = () => {

    const { cart, getTotalPrecio, clearCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    let total = getTotalPrecio()

    const [info, setInfo] = useState({
        nombre: "",
        telefono: "",
        email: "",

    });

    const handleChange = (event) => {
        let { name, value } = event.target //desestructuramos
        setInfo({ ...info, [name]: value }) // esta es la formula correcta de la refacturarizacion
    }

    const handleSubmit = (event) => {
        event.preventDefault() // permite q no se actualice la pagina
        let obj = {
            buyer: info,
            items: cart,
            total: total,
        }
        let ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, obj)
            .then(res => setOrderId(res.id))
            .catch((error) => console.log(error));
        // .cath((error) => console.log(error));

        //update de todos los productos comprados
        // let productsCollection = collection(db, "products")

        cart.forEach((product) => {
            let refDoc = doc(db, "products", product.id)
            updateDoc(refDoc, { stock: product.stock - product.quantity })// actualizacion path

        });
        // limpiar el carrito despues de realizar la compra
        clearCart()
    };


    return (
        <div style={{ padding: "100px", }}>

            {orderId ? (
                <div className="containerOrder">
                    <h1>
                        El número de su compra es: <span>{orderId}</span>
                    </h1>
                    <Link to="/">Ver mas Productos</Link>
                </div>

            ) : (
                <form onSubmit={handleSubmit}>

                    <TextField
                        variant="outlined" type="text" label="Nombre" onChange={handleChange} name="nombre" />

                    <TextField
                        variant="outlined" type="text" label="Telefono" onChange={handleChange} name="Telefono" />

                    <TextField
                        variant="outlined" type="text" label="Email" onChange={handleChange} name="email" />

                    <Button variant="contained" type="submit">Enviar</Button>
                </form>
            )}
        </div>
    )
}

export default Checkout