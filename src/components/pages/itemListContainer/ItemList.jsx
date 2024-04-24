

// creamos el archivo presentacional que solo van codigo html


import ProductCard from "../../common/productCard/ProductCard"

import { Grid } from "@mui/material";


const ItemList = ({ items, error }) => {

    // recorremos los elementos del producto con el metodo map()
    return (


        <Grid container style={{ display: "flex", justifyContent: "space-evenly", padding: "25px", marginBottom: "50px" }}>
            {
                items.map(({ id, modelo, motor, potencia, transmision, airbags, img }) => {// metodo colvac - usar el singular del plural del arreglo que estamos mapeando
                    return (

                        <Grid key={id} item>

                            <ProductCard
                                // key={id}

                                modelo={modelo}
                                motor={motor}
                                potencia={potencia}
                                transmision={transmision}
                                airbags={airbags}
                                img={img}
                                id={id}
                            />
                        </Grid>
                    );
                })
            }
            {
                error && <h2>{error.message}</h2>
            }
        </Grid>

    );
};

export default ItemList;
