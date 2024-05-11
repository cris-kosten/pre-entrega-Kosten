

//retornamos el presentacional 

import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { products } from "../../../productsMock"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/CartContext"

import Swal from "sweetalert2"



const ItemDetailContainer = () => {

    const { id } = useParams()


    const [item, setItem] = useState({})
    const { addToCart, getQuantityById } = useContext(CartContext)


    let initial = getQuantityById(+id)


    useEffect(() => {

        let productEncontrado = products.find((product) => product.id === +id)

        //simulando una promise
        const getProduct = new Promise((res) => {
            res(productEncontrado)
        })
        getProduct.then((res) => setItem(res))

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