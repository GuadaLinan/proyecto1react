import { useState, useEffect } from "react"
// import { getProductById } from "../data/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { dataBase } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [productList, setProduct] = useState ()
    const [loading, setLoading] = useState(true)

    const {productListId} = useParams()

    useEffect(() => {


        getDoc(doc(dataBase, 'productList', productListId)).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    },[productListId])

    return (
        <div className="Detalle">
            {loading ? <h1 className="cargarProductos">Cargando...</h1> : <ItemDetail {...productList} />}
        </div>
    )
}

export default ItemDetailContainer