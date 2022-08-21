import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ name, thumbnail, price, id }) => {
  
    return (
      <article className="productCard">
        <img className="productCardImg" src={thumbnail} alt="" />
        <h3 className="productCardName">{name}</h3>
        <span className="productCardPrice">${price}</span>
        <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option ButtonDetail'>Ver detalle</Link>
        </footer>
      </article>
    );
  };
  

export default Item