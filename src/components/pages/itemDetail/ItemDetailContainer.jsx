

//retornamos el presentacional 

import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { products } from "../../../productsMock"
import { useEffect, useState } from "react"



const ItemDetailContainer = () => {

    const { id } = useParams()


    const [item, setItem] = useState({})
    useEffect(() => {

        let productEncontrado = products.find((product) => product.id === +id)

        //simulando una promise
        const getProduct = new Promise((res, rej) => {
            res(productEncontrado)
        })
        getProduct.then((res) => setItem(res))

    }, [id])

    const onAdd = (cantidad) => {
        //agregar al carrito
        // console.log(item)
        // console.log(cantidad)

        let objetoCompleto = { ...item, quantity: cantidad }
        //agregamos al carrito
        console.log(objetoCompleto)
    }

    return <ItemDetail item={item} onAdd={onAdd} />;
}

export default ItemDetailContainer