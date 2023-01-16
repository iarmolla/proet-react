import React from 'react'
import '../styles/error.css'
import error from '../assets/error.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <Navbar hide="hide"></Navbar>

      <div className='error'>
      <Link to="/" className="ov-btn-slide-left ov-btn-slide-left--outline error__title">VOLVER</Link>

        <img className='error__image' src={error} alt="404"></img>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Error