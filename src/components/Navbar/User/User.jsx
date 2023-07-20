import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavLinkWrapper } from '../NavbarStyles'

const User = () => {
return (
    <NavLinkWrapper>
    <NavLink to="/login" className='navLink'>
    <span className="material-symbols-outlined">
        account_circle
    </span>
    Iniciar Sesión
    </NavLink>
    </NavLinkWrapper>
)
}

export default User