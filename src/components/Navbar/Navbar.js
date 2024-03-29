import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navBar">
            <div className="logo">
            <Link to='/'>
                 <img src='images/logoLL.png' alt='Logo'/>
            </Link>
            </div>
            <div>
                <Link to='/category/cuadernos' className='botonesNav'>Cuadernos</Link>
                <Link to='/category/accesorios' className='botonesNav'>Accesorios</Link>
                <Link to='/category/papeleria' className='botonesNav'>Papelería</Link>
            </div>
            <Link to='Cart' className='link'><CartWidget/></Link> {/* <CartWidget /> */}
        </nav>
    )
}


export default Navbar