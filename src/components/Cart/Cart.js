import './Cart.css'
import CartContext from "../../context/CartContext"
import { useContext} from "react"
import { Link } from 'react-router-dom'

const CartDetail = ()=>{

    const { cart, removeItem, clearCart, getQuantity, total } = useContext(CartContext)

    let productsInCart = getQuantity()

    let finalPrice = total();

    return (

        <div className='cart'>

            <div className='productsAdded'>
                <div>PRODUCTO</div>
                <div>UNIDADES</div>
                <div>PRECIO POR UNIDAD</div>
                <div>SUBTOTAL</div>
            </div>

            {productsInCart === 0 && 
                <div className='emptyCart'>
                    <h2>El carrito está vacio</h2>
                    <Link to="/" className='returnToBuy'>Volver a comprar</Link>
                </div>
            }

            {cart.map(prod => 
        
                <div key={prod.id} className="productContainer">

                    <div className='cartProduct'>
                        <h3>
                            {prod.name}
                        </h3> 
                    </div>

                    <div className='cartQuantity'>
                        <h3>
                          {prod.quantity}
                        </h3> 
                    </div>

                    <div className='priceCartProduct'>
                        <h3>
                            {prod.price} $
                        </h3> 
                    </div>

                    <div className='finalPriceProduct'>
                        <h3>
                            {prod.price * prod.quantity} $
                        </h3> 
                    </div>

                    <div className='cartButton'>
                        <button onClick={() => removeItem(prod.id)}>Quitar del carrito</button>
                    </div>
                </div>
            )}  

            <div className='cartOrder'>

                <div> 
                    <h2>
                        Productos agregados: {productsInCart}
                    </h2>

                    <h2>
                        Total a pagar: {finalPrice} $
                    </h2>
                </div>

                {productsInCart > 0 ? 
                
                    <div className='btnsContainerFinishBuy'>
                        <button className='clearCartBtn' onClick={() => clearCart()}>Vaciar Carrito</button>

                        <Link to='/checkout' className='checkoutBtn'>Comprar</Link>

                    </div> 
                
                : <></>}
            

                

            </div>

        </div>

        
        
    )

}

export default CartDetail