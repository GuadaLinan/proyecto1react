import React, { useEffect, useState } from 'react';
import Item from "../Item/Item"
import { productList } from '../data/data.js';
import './ItemList.css'


const ItemList = () => {
    const [products, setProducts] = useState([]);
  
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (true) {
          resolve(productList);
        } else {
          // reject(error);
        }
      }, 2000);
    });
  
    const getProductsFromDB = async () => {
      try {
        const result = await getProducts;
        setProducts(result);
      } catch (error) {
        console.error(error);
        alert('No podemos mostrar los productos en este momento');
      }
    };
  
    useEffect(() => {
      getProductsFromDB();
    }, []); 
  
    return (
      <div className="product-list-container">
        {
          products.length ? ( 
            <>
              {
                products.map((product) => {
                  return (
                    <Item
                      key={product.id}
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  );
                })
              }
            </>
          ) : (
            <p>Cargando productos...</p>
          ) 
        }
      </div>
    );
  };
  
  export default ItemList;
  