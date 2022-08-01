const products = [
    { id: '1', name: 'Cuaderno ABC Rivadavia', price: 1000, category: 'cuadernos', img:'/images/cuadernoABC.png', stock: 40, description:'Cuaderno rayado A4 de ABC Rivadavia' },
    { id: '2', name: 'Washi tape', price: 800, category: 'accesorios', img:'/images/cintas.png', stock: 20, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'Lapicera glitter', price: 1200, category: 'tablet', img:'/images/lapiceraGlitter.png', stock: 10, description:'Descripcion de Ipad'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}