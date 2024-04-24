import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams, useNavigate } from "react-router-dom";








// creamos un componente
const ItemListContainer = () => {

    // const navigate = useNavigate() //devuelve una funcion -->{"/cart"}

    const { category } = useParams();


    // name --> un string ---> truthy
    // name --> undefined ---> falsy
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    //simulando una peticion
    useEffect(() => {

        let productsFiltered = products.filter(
            (product) =>
                product.categoria === category)

        // las promesas se crean en el servidor
        const getProducts = new Promise((resolve, reject) => {
            let x = true;
            if (x) {
                resolve(category ? productsFiltered : products);

            } else {
                //reject : la condicion no se cunple/ rechaza la peticion
                reject({ status: 404, message: "lo sentimos, no se puede cargar la pagina" })
            }
            // console.log(name)
        })
        getProducts.then((res) => setItems(res)).catch((error) => setError(error));
    }, [category]);


    return <ItemList items={items} error={error} />
};

export default ItemListContainer



