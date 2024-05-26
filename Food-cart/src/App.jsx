import { createContext, useState } from 'react'
// import products from '../assets/products.json'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import MyCart from './components/MyCart'
export const cartContext=createContext()
function App() {
  const [food,setFood]=useState([])

  return (
    <cartContext.Provider value={{food,setFood}}>
   <BrowserRouter>
      <Header />
      <div className="hcontainer">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<MyCart />} />
        </Routes>
      </div>
   </BrowserRouter>
   </cartContext.Provider>
  )
}

export default App
