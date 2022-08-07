export const productList = [
    { 
    id: '1',
    name: 'Cuaderno ABC Rivadavia',
    price: 1000,
    category: 'cuadernos',
    thumbnail:'/images/cuadernoABC.png',
    stock: 40,
    description:'Cuaderno rayado A4 de ABC Rivadavia' 
    },
    {
    id: '2',
    name: 'Washi tape', 
    price: 600, 
    category: 'accesorios', 
    thumbnail:'/images/cintas.png', 
    stock: 20, 
    description:'Cintas washi tape x 7'
    },
    {
    id: '3', 
    name: 'Lapicera glitter', 
    price: 1200, 
    category: 'papeleria', 
    thumbnail:'/images/lapiceraGlitter.png', 
    stock: 10, 
    description:'Lapicera de color con glitter'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productList)
        }, 500)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productList.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productList.find(prod => prod.id === id))
        }, 500)
    })
}