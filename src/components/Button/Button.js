import React from 'react'

const Button = ({ handleClick, color, children }) => {
    
    return (
        <button onClick={handleClick} style={{ color: color}}>
            {children}
        </button>
    )
}

export default Button