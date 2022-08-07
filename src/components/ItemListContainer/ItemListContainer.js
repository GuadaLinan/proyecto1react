import React from 'react'
import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import {getProducts, getProductsByCategory} from '../data/data.js'

const ItemListContainer = ({greeting}) => {
    const [productList, setProducts] = useState([])
    const {categoryId} = useParams ()

    useEffect(() => {
        if(!categoryId) {
            getProducts().then(productList => {
                setProducts(productList)
            })
        } else {
            getProductsByCategory(categoryId).then(productList => {
                setProducts(productList)
            })
        }
    }, [categoryId])


return (
    <section className="itemListContainer">
        <h1>{greeting}</h1>
        <h2 className="itemLC-title">Novedades</h2>
         <ItemList productList={productList}/>
    </section>
)
}


export default ItemListContainer;