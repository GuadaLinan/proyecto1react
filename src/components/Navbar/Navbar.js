import './Navbar.css'
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
                <h1>Ecommerce</h1>
            </div>
            <div>
                <Button handleClick={handleClick} color='blue'>Cartucheras</Button>
                <Button color='pink'>Cuadernos</Button>
                <Button color='purple'>Lápices</Button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default Navbar