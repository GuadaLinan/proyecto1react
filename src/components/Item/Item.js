import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ name, thumbnail, price, id }) => {
  
    return (
      <article className="productCard">
        <img src={thumbnail} alt="" />
        <h3 className="productName">{name}</h3>
        <span className="productPrice">${price}</span>
        <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='detailButton'>Ver detalle</Link>
        </footer>
      </article>
    );
  };
  

export default Item