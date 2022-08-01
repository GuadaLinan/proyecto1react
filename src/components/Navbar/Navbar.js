import './Navbar.css'
import React from 'react'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }

    return (
        <nav className="Navbar">
            <div className="logo">
            <img src='images/logoLL.png' alt='Logo'/>
            </div>
            <div>
                <Button handleClick={handleClick}>Cuadernos</Button>
                <Button handleClick={handleClick}>Accesorios</Button>
                <Button handleClick={handleClick}>Papelería</Button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default Navbar