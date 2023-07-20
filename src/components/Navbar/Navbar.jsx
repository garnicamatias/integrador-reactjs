import React from 'react'
import {NavBar, NavbarWrapper, Logo, NavLinkWrapper } from './NavbarStyles'
import { NavLink } from 'react-router-dom'
import CartIcon from './CartIcon/CartIcon'
import User from './User/User'
import Cart from './Cart/Cart'
import NavMenu from './Menu/NavMenu'

const Navbar = () => {
  

  return (
    <NavBar>
      <NavbarWrapper className='principalNav'>
      <NavLink to="/" className='navLink'><Logo><img src="/img/logo.png" alt="" /></Logo></NavLink>  
      <NavLinkWrapper>
        <User/>
        <CartIcon/>
        <Cart/>
      </NavLinkWrapper>
      </NavbarWrapper>
      <NavbarWrapper className='secondNav'>
      <NavMenu/>
      <NavLinkWrapper>
      <NavLink to="/knowus" className={({ isActive }) => isActive? "active navLink": 'navLink'}>Nosotros</NavLink>
      <NavLink to="/faq" className={({ isActive }) => isActive? "active navLink": 'navLink'}>Consultas</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive? "active navLink": 'navLink'}>Contactanos</NavLink>
      </NavLinkWrapper>
      </NavbarWrapper>
    </NavBar>
    
  )
}

export default Navbar