import React from 'react'
import '../styles/error.css'
import error from '../assets/error.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Error() {
  return (
    <>
      <Navbar hide="hide"></Navbar>
      <div className='error' data-aos="fade-right" data-aos-duration="1000">
        <Link to="/" className="ov-btn-slide-left ov-btn-slide-left--outline error__title">VOLVER</Link>
        <img className='error__image' src={error} alt="error"></img>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Error