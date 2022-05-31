import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <h2>CVL Developer</h2>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login"> Login</NavLink></li>
            <li><NavLink to="/produto"> Produtos</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
        </ul>
    </nav>
  )
}

export default Header