import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"

// creamos un componente
const ItemListContainer = () => {
    const { category } = useParams();

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    //solicitamos la peticion al firebase
    useEffect(() => {

        const productsCollection = collection(db, "products");
        let consulta = productsCollection;
        if (category) {
            consulta = query(productsCollection, where("categoria", "==", category));
        }
        getDocs(consulta).then((res) => {
            let newArray = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            }); // []
            setItems(newArray);
        });


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



