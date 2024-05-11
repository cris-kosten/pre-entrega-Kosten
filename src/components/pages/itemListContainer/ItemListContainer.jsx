import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams, useNavigate } from "react-router-dom";

import { Skeleton } from "@mui/material";




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
                setTimeout(() => {
                    resolve(category ? productsFiltered : products);
                }, 2500);

            } else {
                //reject : la condicion no se cunple/ rechaza la peticion
                reject({ status: 400, message: "No estas autorizado" })
            }

        })
        getProducts.then((res) => setItems(res)).catch((error) => setError(error));
    }, [category]);


    // 2da tecnica de renderizado 
    if (items.length === 0) {
        return (
            <div style={{ display: "flex", flexWrap: "wrap", margin: "50px", justifyContent: "space-between", padding: "50px" }}>
                <div>
                    <Skeleton
                        variant="rectangular"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={150} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={40} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "0.5rem" }}
                        width={150}
                        height={30} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "0.5rem" }}
                        width={100}
                        height={20} />

                </div>
                <div>
                    <Skeleton
                        variant="rectangular"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={150} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={40} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "0.5rem" }}
                        width={100}
                        height={30} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "0.5rem" }}
                        width={100}
                        height={20} />

                </div>
                <div>
                    <Skeleton
                        variant="rectangular"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={150} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        width={250}
                        height={40} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "0.5rem" }}
                        width={100}
                        height={30} />

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: "0.5rem" }}
                        width={100}
                        height={20} />

                </div>
            </div>
        )
    }

    // en Material IU buscar --> Progress
    return (
        // 1ra tecnica de renderizado
        <>
            <h1>Bienvenidos ah Relojeria Corazan...</h1>

            {items.length > 0 ? (
                <ItemList items={items} error={error} />
            ) : (
                <h2>Cargando...</h2>
            )}

            {/* <h1>Cargando...</h1> */}
            {/* <h1>Nuestros Productos...</h1> */}
            {/* <ItemList items={items} error={error} /> */}
        </>
    )
};

export default ItemListContainer



