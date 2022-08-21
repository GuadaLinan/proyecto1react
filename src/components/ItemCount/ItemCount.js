import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   useEffect(()=>{
    setQuantity(initial)
   }, [initial])

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div className='agregarCarrito'>
                <button className="Button Letras" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount