import React from 'react'
import Header from './Header'
import Product from './Product'
import './Ecommerce.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import Services from './Services'
import { ContextAPI } from './EcommerceAPI'
import { useState } from 'react'
import Single from './Single'
import { useEffect } from 'react'

function Ecommerce() {
  const [Count, setCount] = useState(
    (localStorage.getItem('Item') === null)
      ? [] :
      JSON.parse(localStorage.getItem('Item'))
      )


  function AddtoCart(e, id) {
    e.preventDefault()
    setCount([...Count, id])

    console.log(Count)
  }


  useEffect(() => {
    // console.log("hello")
    localStorage.setItem('Item', JSON.stringify(Count))
  }, [Count])

  return (
    <div>
      <ContextAPI.Provider value={{ Count, setCount, AddtoCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Product />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/service' element={<Services />}></Route>
            <Route path='/cart' element={<Cart />}></Route>

            <Route path='/products/:id' element={<Single />}></Route>
          </Routes>
        </BrowserRouter>

      </ContextAPI.Provider>

    </div>
  )
}

export default Ecommerce