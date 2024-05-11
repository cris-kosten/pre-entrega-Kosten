import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import Swal from "sweetalert2"

const Cart = ({ cart, clearCart, deleteById, total }) => {


    const clartCartAlert = () => {
        // clearCart()
        Swal.fire({
            title: "Seguro quieres eliminar el producto",
            position: "center",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Si, borrar",
            denyButtonText: "cancelar",

        }).then((res) => {
            if (res.isConfirmed) {
                clearCart()
                Swal.fire({
                    title: "Se elimino el producto del carrito",
                    icon: "success"
                })
            } else if (res.isDenied) {
                Swal.fire({
                    title: "Su producto se encuentra en el carro",
                    icon: "info"
                })
            }
        })
    }


    return (
        <div>
            <h1>Tus Pedidos</h1>

            {
                cart.map(product =>
                    <div key={product.id} style={{ border: "2px solid red" }}>
                        <h4>{product.nombre}</h4>
                        <h5>{product.precio}</h5>
                        <h5>{product.quantity}</h5>
                        <Button onClick={() => deleteById(product.id)}>Eliminar</Button>
                    </div>)
            }
            <h3>Total a pagar es de: ${total}</h3>


            {
                cart.length > 0 && <Button onClick={clartCartAlert} variant="outlined">Limpiar Carrito</Button>
            }


            {
                cart.length > 0 ? <Link to="/checkout">
                    <Button variant="contained">FInalizar Compra</Button>
                </Link> : (
                    <h2>Agrega productos a tu carrito de compras</h2>
                )}


        </div>
    )
}

export default Cart