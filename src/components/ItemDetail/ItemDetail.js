import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, thumbnail, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity, total: (price*quantity)
        }

        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <article className="card">
            <header>
                <h2 className="headerItem">
                    {name}
                </h2>
            </header>
            <div className='centrar'>
                <img src={thumbnail} alt={name} className="productImg"/>
            </div>
            <section>
                <p className="productInfo">
                    Categoria: {category}
                </p>
                <p className="productInfo">
                    Descripción: {description}
                </p>
                <p className="productInfo">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link className='buyButton' to='/Cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail