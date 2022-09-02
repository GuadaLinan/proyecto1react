import CartContext from "../../context/CartContext"
import { useContext, useState } from 'react'
import { dataBase } from '../../services/firebase'
import { Link } from "react-router-dom"
import { addDoc, collection,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import './Checkout.css'

const Checkout = () => {

    const [load, setLoad]  = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, total, clearCart} = useContext(CartContext) 

    const [ dataOrder, setDataOrder ] = useState({

        name:'',
        surname:'',
        phone:'',
        address:'',
        total:0,
        orderId:''
    })


    const handleChange = (e) => {
        setDataOrder({
            ...dataOrder,
            [e.target.name]:e.target.value
        })
        
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const createOrder = async () => {
        setLoad(true)

        try{

            const order = {
                
                buyer: {
                    name:dataOrder.name,             
                    surname:dataOrder.surname,
                    phone:dataOrder.phone,
                    address:dataOrder.address
                },
        
                items: cart, 
                total: total(),
                date: new Date()
            }
            
            if(order.buyer.name === '' || order.buyer.surname ==='' || order.buyer.phone ==='' || order.buyer.address === ''){
                alert('Tiene que completar todos los campos para emitir la orden de compra.')
                setLoad(false)
            } 

            else{

                const productsId = cart.map(prod => prod.id)
    
                const productsReference = collection (dataBase, 'productList')
    
                const productsAddedFromFirestore = await getDocs(query(productsReference, where(documentId(), 'in', productsId))) 
    
                const { docs } = productsAddedFromFirestore 
    
                const outOfStock = []
    
                const batch = writeBatch(dataBase)
    
                docs.forEach(doc => {
    
                    const dataDoc = doc.data()
    
                    const stockDataBase = dataDoc.stock 
    
                    const productAddedToCart = cart.find(prod => prod.id === doc.id)
    
                    const quantityProducts = productAddedToCart?.quantity
    
                    if(stockDataBase >= quantityProducts){
    
                        batch.update(doc.ref, { stock: stockDataBase - quantityProducts})
    
                    }else{
                    outOfStock.push({ id:doc.id , ...dataDoc })
                    }   
    
                })
    
            if(outOfStock.length === 0){

                await batch.commit()
                
                const orderReference = collection(dataBase, 'orders')
    
                const orderAdded = await addDoc(orderReference, order)
    
                clearCart()

                setOrderCreated(true)

                setDataOrder({
                    ...dataOrder,
                    total:order.total,
                    orderId:orderAdded.id
                })
            }
            
             else{
                  console.log('Hay productos agregados fuera de stock')
                }

            }

        }catch(error){
            console.log(error)

        }finally{
            setLoad(false)
        }

    }
        

    if(load){
        
        return (
            <div>
                <h1 className='checkoutTitles'>Orden de compra en proceso... </h1>
            </div>  
        )
        
    }

    if(orderCreated){
        
        return (

            <div className='orderContainer'>
    
                <h1 className='orderTitle'>La orden fue creada correctamente</h1>
    
                <div className='containerDataOrder'>
                        
                    <h2 className='buyerInfo'>Id de la compra: {dataOrder.orderId}</h2>
    
                    <h2 className='buyerInfo'>Cliente: {dataOrder.name} {dataOrder.surname}</h2>
    
                    <h2 className='buyerInfo'>Teléfono: {dataOrder.phone}</h2>
    
                    <h2 className='buyerInfo'>Dirección: {dataOrder.address}</h2>
    
                    <h2 className='buyerInfo'>Total a pagar: {dataOrder.total}$</h2>
    
                    <Link to='/'   className='returnToBuy'>Volver a comprar</Link>
    
                </div>
    
            </div>
        )      
    }

    return (
        
        <div className="checkoutContainer">

            <h1 className="checkoutTitles">Realizar compra</h1>

            <form className="formCheckout" onSubmit={handleSubmit}>

                <input type="text" name="name" placeholder="Ingrese su nombre" onChange={handleChange} value={dataOrder.name}></input>

                <input type="text" name="surname" placeholder="Ingrese su apellido" onChange={handleChange} value={dataOrder.surname}></input>

                <input type="text" name="phone" placeholder="Ingrese su teléfono" onChange={handleChange} value={dataOrder.phone}></input>

                <input type="text" name="address"  placeholder="Ingrese su dirección" onChange={handleChange} value={dataOrder.address}></input>

                <button onClick={createOrder}>Generar orden de compra</button>

            </form>

        </div>
    )

}

export default Checkout