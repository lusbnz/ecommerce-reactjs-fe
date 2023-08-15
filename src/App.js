import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, Cart, Checkout, Error, Home, Login, Products, SingleProduct } from './pages'
import { Footer, Navbar } from './components'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App