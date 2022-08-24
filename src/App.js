import React from 'react';
import './App.css';
import { CartContextProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartDetail from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/detail/:productListId' element={<ItemDetailContainer />} />  
          <Route path="Cart" element={<CartDetail/>}/>
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
