import React, { useEffect, useState } from 'react';
import Item from "../Item/Item"
import { getProducts, getProductsByCategory } from '../data/data.js';
import './ItemList.css'
import { useParams } from 'react-router-dom';


const ItemList = () => {
    const [products, setProducts] = useState([]);
    
    const [loading , setLoading] = useState(true)

    const {categoryId} = useParams()

  useEffect(()=>{
    setLoading(true)
    if (categoryId) {
      getProductsByCategory(categoryId)  
      .then(response =>{
        setProducts(response)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(()=>{
        setLoading(false)
      })
    } else{
      getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(()=>{
        setLoading(false)
      })
    }
      
  },[categoryId]);

  if (loading) {
    return <h1 className='cargarProductos'>Cargando productos...</h1>
    
  }
  
    return (
      <div className="product-list-container">
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
      </div>
    );
  };
  
  export default ItemList;