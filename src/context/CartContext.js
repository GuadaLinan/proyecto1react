import { useState, createContext} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity,
                        total: productToAdd.quantity*productToAdd.price
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const clearCart = () => {
        setCart([])
    }

    const total = cart.reduce((acc, sum) => {
        return acc + sum.total
    }, 0)

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext