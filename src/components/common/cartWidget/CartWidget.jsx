import { Badge } from "@mui/material"
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {

    const { getTotalItems } = useContext(CartContext)
    let total = getTotalItems()

    return (
        <Link to="/cart" >

            <Badge badgeContent={total} color="primary" showZero={true}>
                <ShoppingCartSharpIcon color="secondary" />
            </Badge>
        </Link>
    )
}
export default CartWidget