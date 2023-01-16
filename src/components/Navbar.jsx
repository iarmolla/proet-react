import React from 'react'
import '../styles/navbar.css'
import wave from '../assets/wave.svg'

function Navbar() {
  return (
    <header>
      <nav>
        <img src={wave} className="wave" alt="wave" />
        <h1 className='nav__title'>Proet</h1>
        <div className='nav__section'>
          <a href="#certificate" className='nav__link'>Certificados</a>
          <a href="#questions" className='nav__link'>Preguntas</a>
          <a href="#help" className='nav__link'>Ayuda</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar