
import { useContext } from "react"
import Cart from "./Cart"
import { CartContext } from "../../../context/CartContext"



const CartContainer = () => {

    const { cart, clearCart, deleteById, getTotalPrecio } = useContext(CartContext)

    let total = getTotalPrecio()

    return <Cart
        cart={cart}
        clearCart={clearCart}
        deleteById={deleteById}
        total={total}
    />

}

export default CartContainer