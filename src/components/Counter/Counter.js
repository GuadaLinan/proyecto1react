import { useState } from 'react'
import '../Button/Button.css'


const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock ) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className='botones' onClick={decrement}>Decrementar</button>
            <button className='botones' onClick={increment}>Incrementar</button>
            <button className='botones' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter