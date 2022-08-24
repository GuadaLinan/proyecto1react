import CartContext from '../../context/CartContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom'
import './Cart.css'

const CartDetail = () =>{
    const {cart, clearCart, removeItem, total} = useContext(CartContext)


    return(
        <div className='cart'>
            <h1 className='cart'>{cart.length === 0 ? (<>
                    <h1 className='cart'>El carrito está vacío</h1>
                    <Link className='col-auto button' to='/'>Seguir comprando</Link>
                </>) :  'Tu carrito'}</h1>
                <section>
                    <thead>
                     <tr>
                     <th/>
                      <th>Productos</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Total</th>
                      </tr>
                  </thead>
                 <tbody>
                    {cart.map((u) => {
                        return (
                        <tr key={u.id}>
                        <td>
                            <img src='/images/eliminarCarrito.png' width={30} alt='delete' onClick={() => removeItem(u.id) } id={u.id}/>
                        </td>
                        <td>
                            <Link className='linkProduct' to={`../Detail/${u.id}`}>
                                {u.name}
                            </Link>
                        </td>
                        <td>${u.price}</td>
                        <td>{u.quantity}</td>
                        <td>${u.total}</td>
                        </tr>)
                    })}
                     <tr>
                     <td colSpan={4}>Total</td>
                     <td>${total}</td>
                     </tr>
                 </tbody>
                </section>
                {cart.length !== 0 && (
                    <div className='containerButton'>
                    <button className='col-auto button' onClick={clearCart}>Vaciar carrito</button>
                    <Link className='col-auto button' to='/'>Seguir viendo</Link>
                    <Link to='/checkout'>Checkout</Link>
            </div>)}
        </div>
    )
}

export default CartDetail