import React from 'react'
import '../styles/subscription.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import sub from '../assets/sub.svg'
import { Link } from 'react-router-dom'

function Subscription() {
    return (
        <>
            <Navbar hide="hide"></Navbar>
            <section className='subscription'>
                <img src={sub} className="subscription__image" alt="subscription" />
                <article className='subscription__section'>
                    <h3 className='subscription__title'>Gracias por comprar el curso en breve recibiras un mail con los detalles el dia y hora de la cursada.</h3>
                    <Link to="/" className="ov-btn-slide-left ov-btn-slide-left--outline backend">Volver</Link>
                </article>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Subscription