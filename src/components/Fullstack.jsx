import React from 'react'
import react from '../assets/react.svg'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Fullstack() {
    return (
        <div>
            <Navbar hide='hide'></Navbar>
            <div className='work work__frontend'>
                <section className='work__section'>
                    <h1 className='work__title'>Fullstack developer</h1>
                    <p className='work__paragraph'>En este curso aprenderas las tecnologias mas demandas del mercado.</p>
                    <article>
                        <ul className='work__items work__items--backend'>
                            <li className='work__item'>React</li>
                            <li className='work__item'>Node</li>
                            <li className='work__item'>Javascript.</li>
                            <li className='work__item'>SQL.</li>
                            <li className='work__item'>Git.</li>
                        </ul>
                        <Link to="/credit" className="ov-btn-slide-left ov-btn-slide-left--outline backend">COMPRAR</Link>
                    </article>
                </section>
                <picture>
                    <img src={react} alt="work" className='work__image' />
                </picture>
            </div>
            <section className='frontend__section'>
                <span className='frontend__title'>Sobre el curso</span>
                <p className='frontend__item'>
                    ¿Quieres aprender en un solo curso master todas las tecnologías? Este curso completo lo tiene todo para empezar desde cero y llegar a ser un programador experto fullstack para acceder a miles de empleos
                    En este curso master vas a aprender:
                    Programar sitios web responsive con HTML5, CSS3 y React
                    Programar cualquier aplicación con JavaScript y TypeScript
                    Programar servidores de backend con NodeJs
                    Programar aplicaciones fronted con React
                </p>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Fullstack