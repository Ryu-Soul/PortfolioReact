import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/global.scss'
function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
        Accueil
      </NavLink>
      <NavLink to="/ProjetNina" end className={({ isActive }) => isActive ? 'active-link' : ''}>
        Projet Nina
      </NavLink>
    </nav>
  )
}

export default Navbar