import React from 'react'
import { Route, Routes as ReactDomRoutes } from 'react-router-dom'
import Home from "../pages/Home/Home"
import NotFound from '../pages/NotFound/NotFound'
import Category from '../pages/Category/Category'
import Checkout from '../pages/Checkout/Checkout'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Contact from '../pages/Contact/Contact'

const Routes = () => {
  return (
    <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='category'>
          <Route path=":category" element={<Category />} />
        </Route>
        <Route path='checkout' element={<Checkout />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound/>}  />
    </ReactDomRoutes>
  )
}

export default Routes