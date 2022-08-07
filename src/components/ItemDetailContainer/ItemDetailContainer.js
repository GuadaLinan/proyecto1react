import { useState, useEffect } from "react"
import { getProductById } from "../data/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [productList, setProduct] = useState ()

    const {productListId} = useParams()

    useEffect(() => {
        getProductById(productListId)
        .then(productList => {
            setProduct(productList)
        })
        .catch(error => {
            console.log(error);
        })
    },[productListId])

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...productList}/>
        </div>
    )
}

export default ItemDetailContainer