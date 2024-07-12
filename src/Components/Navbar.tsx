import React from 'react'
import "../CSS/Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href="/Inicio" className='PageTitle'>
        Rental de Carros Diego Torres
        </a>
        <hr/>
        <ul>
            <li>
                <a href="/Inicio">Inicio</a>
            </li>
            <li>
                <a href="/Carros">Carros</a>
            </li>
            <li>
                <a href="/Contacto">Contacto</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar