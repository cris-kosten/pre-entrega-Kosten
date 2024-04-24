import { Badge } from "@mui/material"
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";


const CartWidget = () => {
    return (

        <Link to="/cart" >

            <Badge badgeContent={0} color="primary" showZero={true}>
                <ShoppingCartSharpIcon color="secondary" />
            </Badge>
        </Link>
    )
}

export default CartWidget