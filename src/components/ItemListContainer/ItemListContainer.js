import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting}) => {

return (
    <section className="itemListContainer">
        <h1>{greeting}</h1>
        <h2 className="itemLC-title">Novedades</h2>
         <ItemList/>
    </section>
)
}


export default ItemListContainer;