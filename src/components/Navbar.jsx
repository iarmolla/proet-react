import React,{ useEffect } from 'react'
import '../styles/navbar.css'
import wave from '../assets/wave.svg'
import { Link } from "react-router-dom";


function Navbar({hide}) {
  useEffect(() => {
    const element = document.getElementById('navbar')
    element?.scrollIntoView()
  }, [])
  
  return (
    <header id="navbar">
      <nav>
        <img src={wave} className="wave" alt="wave" />
        <Link to="/" className='nav__title'>Proet</Link>
        {hide === 'hide' ? <></>:<>
        <div className='nav__section'>
          <a href="#certificate" className='nav__link'>Certificados</a>
          <a href="#questions" className='nav__link'>Preguntas</a>
          <a href="#testimonials" className='nav__link'>Testimonios</a>
        </div>
        </>}
      </nav>
    </header>
  )
}

export default Navbar