import React, { useEffect } from 'react'
import './Button.css'

const Button = () => {

   
    const handleClick = () => {
        console.log('Se hizo click')
    }

    useEffect(() => {
        const button = document.getElementById('button')
        
        button.addEventListener('click', handleClick)

        return () => {
            button.removeEventListener('click', handleClick)
        }
    }, [])

 

    return (
        <button className='botonesNav' id='button'>Botón</button>
    )
}

export default Button