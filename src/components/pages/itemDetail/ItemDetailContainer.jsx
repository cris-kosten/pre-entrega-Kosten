

//retornamos el presentacional 

import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore"



const ItemDetailContainer = () => {

    const { id } = useParams()


    const [item, setItem] = useState({})
    const { addToCart, getQuantityById } = useContext(CartContext)


    let initial = getQuantityById(+id)

    // accedemos a un producto especifico con su informacion
    useEffect(() => {

        let productsCollection = collection(db, "products")
        let refDoc = doc(productsCollection, id)
        getDoc(refDoc).then(res => {
            setItem({ id: res.id, ...res.data() })
        });

    }, [id])

    const onAdd = (cantidad) => {

        let product = { ...item, quantity: cantidad }

        addToCart(product)
        //agregamos al carrito

        Swal.fire({
            position: "center",
            icon: "success",
            iconColor: '#fff',
            title: "Producto agregado al carro",
            showConfirmButton: false,
            timer: 1500,
            background: '-webkit-radial-gradient(#560e86, #0a0011)',
            color: "orange",
        })

    };

    return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
}

export default ItemDetailContainer