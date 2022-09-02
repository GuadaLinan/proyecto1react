import './ItemList.css'
import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = ({products }) => {
    return(
        <div className='productListC' onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}

export default memo(ItemList)