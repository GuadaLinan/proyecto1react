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
            <div>
            <img src='images/logoLL.png' alt='Logo'/>
            </div>
            <div>
                <Button handleClick={handleClick} color='#5265c4'>Cuadernos</Button>
                <Button color='#5265c4'>Accesorios</Button>
                <Button color='#5265c4'>Papelería</Button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default Navbar