import React from 'react'
import react from '../assets/react.svg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Date from '../components/Date'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Fullstack() {
    return (
        <div>
            <Navbar hide='hide'></Navbar>
            <div className='work work__frontend' data-aos="fade-right" data-aos-duration="1000">
                <section className='work__section'>
                    <h1 className='work__title'>Fullstack developer</h1>
                    <p className='work__paragraph'>En este curso aprenderas las tecnologias mas demandas del mercado.</p>
                    <article>
                        <ul className='work__items work__items--backend'>
                            <li className='work__item'>REACT.</li>
                            <li className='work__item'>NODE.</li>
                            <li className='work__item'>JAVASCRIPT.</li>
                            <li className='work__item'>SQL.</li>
                            <li className='work__item'>GIT.</li>
                        </ul>
                        <a href="#fullstack" className="ov-btn-slide-left ov-btn-slide-left--outline backend">COMPRAR</a>
                    </article>
                </section>
                <picture>
                    <img src={react} alt="work" className='work__image' />
                </picture>
            </div>           
            <section className='frontend__section' data-aos="fade-right" data-aos-duration="1000">
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
            <section id="fullstack" data-aos="fade-right" data-aos-duration="1000">
                <Date course='fullstack'></Date>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Fullstack