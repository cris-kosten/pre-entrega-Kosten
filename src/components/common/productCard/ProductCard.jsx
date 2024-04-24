import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


// las props llegan siempre como un objeto
// export const ProductCard = (props) => {
//     // desestructuramos con props 
//     const { modelo, motor, potencia, transmision, airbags, img } = props

const ProductCard = ({ id, modelo, motor, potencia, transmision, airbags, img }) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {modelo}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Motor:  {motor}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Potencia: {potencia}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Transmision: {transmision}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Airbags: {airbags}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                <Link to={`/itemDetail/${id}`}>
                    <Button size="small" color="primary">
                        Ver Descripcion
                    </Button>
                </Link>

            </CardActions>
        </Card>
    )
}


export default ProductCard


