import React from 'react';
import Counter from '../Counter/Counter.js';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ name, thumbnail, price, id, stock }) => {
    

  const onAdd = (qty) => {
      qty + 1 ? alert(`Has agregado ${qty} productos al carrito`) : alert('Has agregado 1 producto al carrito');
    };
  
    return (
      <article className="productCard">
        <img className="productCardImg" src={thumbnail} alt="" />
        <h3 className="productCardName">{name}</h3>
        <span className="productCardPrice">${price}</span>
        <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option ButtonDetail'>Ver detalle</Link>
        </footer>
        <Counter stock={stock} onAdd={onAdd} initial={1} />
      </article>
    );
  };
  

export default Item