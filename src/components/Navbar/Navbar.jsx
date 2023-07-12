import React from 'react'
import { NavbarWrapper, Logo, NavLinkWrapper } from './NavbarStyles'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <>
      <NavbarWrapper>
      <NavLink to="/" className='navLink'><Logo></Logo></NavLink>  
      <NavLinkWrapper>
      <NavLink to="/knowus" className={({ isActive }) => isActive? "active navLink": 'navLink'}>Nosotros</NavLink>
      <NavLink to="/faq" className={({ isActive }) => isActive? "active navLink": 'navLink'}>Consultas</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive? "active navLink": 'navLink'}>Contactanos</NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive? "active navLink": 'navLink'}>
        <span className="material-symbols-outlined">
          account_circle
        </span>Iniciar Sesión</NavLink>
      </NavLinkWrapper>
      </NavbarWrapper>
    </>
    
  )
}

export default Navbar