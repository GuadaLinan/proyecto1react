import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext.js'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()
    
    return(
        <div className="CartWidget">
            <img
                src='images/cart.png'
                alt="CartWidget"
                width="38"
            />
            <span className='cartNumber'>{quantity}</span>
        </div>
    )
}

export default CartWidget