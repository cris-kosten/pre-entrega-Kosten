

const Cart = ({ productosAgregados }) => {
    return (
        <div>
            <h1>Este es el carrito</h1>
            <h2>aca van los productos</h2>
            <div>
                {productosAgregados}
            </div>
        </div>
    )
}

export default Cart