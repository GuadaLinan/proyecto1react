// import { useState } from 'react'
// import React from 'react';
// import './Counter.css'

// const Counter = ({ initial, stock, onAdd }) => {

//     const [qty, setQty] = useState(initial);

//     const addProduct = (num) => {setQty(qty + num);};
    
//     const addItem = (productToAdd) => {
//       if(!isInCart(productToAdd.id)) {
//           setCart([...cart, productToAdd])
//       } else {
//           const cartUpdated = cart.map(prod => {
//               if(prod.id === productToAdd.id) {
//                   const productUpdated = {
//                       ...prod,
//                       quantity: productToAdd.quantity
//                   }
//                   return productUpdated
//               } else {
//                   return prod
//               }
//           })

//           setCart(cartUpdated)
//       }
//   }

//     return (
//       <CartContext.Provider value={{addItem}}>

    
//         <div className="countContainer">
//           <div className="countContainer__contador">
//             <button
//               className="countContainer__button"
//               onClick={() => addProduct(-1)}
//               disabled={qty === initial ? true : null}
//             >
//               -
//             </button>
//             <span className="countContainer__qty">{qty}</span>
//             <button
//               className="countContainer__button"
//               onClick={() => addProduct(+1)}
//               disabled={qty === stock ? true : null}
//             >
//               +
//             </button>
//           </div>
    
//           <button
//             className="buttonCarrito"
//             onClick={() => onAdd(qty)}
//             disabled={stock === 0 ? true : null}
//           >
//             Añadir
//           </button>
//         </div>
//         </CartContext.Provider>
//       );
//     };

// export default Counter;