import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { dataBase } from '../../services/firebase'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionReference = !categoryId 
            ? collection(dataBase, 'productList')
            : query(collection(dataBase, 'productList'), where('category', '==', categoryId))

        getDocs(collectionReference).then(response => {
            console.log(response);
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
 
    }, [categoryId])


    if(loading) {
        return <h1 className='cargarProductos'>Cargando productos...</h1>
    }
    return (
        <div className='itemListContainer' onClick={() => console.log('click en itemlistcontainer')}>
        <h1>{`${categoryId || ''}`}</h1>         
        <h2 className="itemLC-title">Novedades</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer

