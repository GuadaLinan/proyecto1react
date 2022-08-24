import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { dataBase } from "../../services/firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"

const Checkout = () => {

    const {cart, getQuantity, getTotal} = useContext(CartContext)
    const totalQuantity = getQuantity()
    const total = getTotal()

    const createOrder = async () => {
    const orderObj = {
        buyer: {
            firstName: 'Guada',
            lastName: 'Liñan',
            phone: '2645447696',
            address: 'Alvear sur 888'
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date()
        }

        const ids = cart.map(prod => prod.id)
        
        const productListRef = collection(dataBase, 'productList')
        
        const productsAddedFromFirestore = await getDocs(query(productListRef, where(documentId(),'in', ids)))
        
        const {docs} = productsAddedFromFirestore

        const outOfStock = []

        const batch = writeBatch(dataBase)

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDataBase = dataDoc.stockDataBase

            const productsAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productsAddedToCart?.quantity
    
            if(stockDataBase >= prodQuantity) {
                batch.update(doc.ref, {stock: stockDataBase - prodQuantity})
            } else {
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        
        })
        
        if(outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection(dataBase, 'orders')
            const orderAdded = await addDoc(orderRef, orderObj)

            console.log(`El id de su orden es: ${orderAdded.id}`);
        } else {
            console.log('Hay productos fuera de stock');
        }
        
    }

    return(
        <>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Generar Orden</button>
        </>
    )
}

export default Checkout