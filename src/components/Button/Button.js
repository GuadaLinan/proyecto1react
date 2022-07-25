import React from 'react'
import './Button.css'

const Button = ({ handleClick, color, children }) => {
    
    return (
        <button className='navItems' onClick={handleClick} style={{ color: color}}>
            {children}
        </button>
    )
}

export default Button