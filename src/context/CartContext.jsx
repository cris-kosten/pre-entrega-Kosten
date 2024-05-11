import { createContext, useState } from "react"

// la usamos para consumir un contexto
export const CartContext = createContext();// ---> contexto

// esto se va a crear siempre cuando queramos crear un contexto y toda la logica
const CartContextGlobal = ({ children }) => {
    //toda la info
    // funcion para agregar
    // para eliminar producto
    //total de lo q tengo a pagar

    const [cart, setCart] = useState([])



    const addToCart = (product) => {
        //tenemos que verificar si ya se encuentra el producto
        let exist = isInCart(product.id)
        if (exist) {

            let newArray = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    //modificacion
                    return { ...elemento, quantity: product.quantity }
                } else {
                    return elemento
                }
            })

            setCart(newArray);

        } else {
            setCart([...cart, product]) // recomendable 

        }
    }

    const clearCart = () => {
        setCart([])
    }

    const deleteById = (id) => {
        const newArray = cart.filter(product => product.id !== id)
        setCart(newArray)
    }

    // funcion que determine el precio total de los productos
    const getTotalPrecio = () => {
        //usamos metodo reduce para saber el total a pagar
        let total = cart.reduce((acc, elemento) => {
            return acc + (elemento.quantity * elemento.precio)
        }, 0)
        return total
    }




    //creamos una funcion para que no se repita el mismo producto
    const isInCart = (id) => {
        //some. recorre el arreglo y devuelve un booleano o un false
        let bool = cart.some(product => product.id === id)
        return bool
    }

    //funcion que determine cuantas unidades de un producto tengo 
    const getQuantityById = (id) => {
        let product = cart.find(el => el.id === id)
        return product?.quantity
    }

    //creamos una funcion que determine cuantos productos tengo
    const getTotalItems = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity
        }, 0)
        return total
    }


    let data = {
        cart,
        addToCart,
        clearCart,
        deleteById,
        getQuantityById,
        getTotalPrecio,
        getTotalItems,
    };


    return <CartContext.Provider value={data}  >
        {children}
    </CartContext.Provider>
}

export default CartContextGlobal

