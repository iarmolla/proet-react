import React from 'react'
import react from '../assets/react.svg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Date from '../components/Date'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Frontend() {
    return (
        <div >
            <Navbar hide='hide'></Navbar>
            <div className='work work__frontend'  data-aos="fade-right" data-aos-duration="1000">
                <section className='work__section'>
                    <h1 className='work__title'>Frontend developer</h1>
                    <p className='work__paragraph'>En este curso aprenderas las tecnologias mas demandas del mercado.</p>
                    <article>
                        <ul className='work__items work__items--backend'>
                            <li className='work__item'>HTML</li>
                            <li className='work__item'>CSS</li>
                            <li className='work__item'>JAVASCRIPT.</li>
                            <li className='work__item'>REACT.</li>
                            <li className='work__item'>GIT.</li>
                        </ul>
                        <a href="#frontend" className="ov-btn-slide-left ov-btn-slide-left--outline backend">COMPRAR</a>
                    </article>
                </section>
                <picture>
                    <img src={react} alt="work" className='work__image' />
                </picture>
            </div>
            <section className='frontend__section'  data-aos="fade-right" data-aos-duration="1000">
                <span className='frontend__title'>Sobre el curso</span>
                <p className='frontend__item'>
                    En este curso aprenderás a desarrollar aplicaciones modernas con Javascript. Programarás en Javascript del lado del servidor aplicando técnicas asincrónicas. Aprenderás a trabajar con Bases de datos SQL y NoSQL dominando la gestión de los datos en forma eficiente, ágil y con una gran facilidad de escalabilidad. Al finalizar el curso serás capaz de diseñar complejas aplicaciones backend robustas, rápidas y escalables, dominando diferentes técnicas de comunicación, manejo de procesos distribuidos, control de grandes volúmenes de datos y despliegue a distintas plataformas web.
                </p>
            </section>
            <section id="frontend"  data-aos="fade-right" data-aos-duration="1000">
                <Date course='frontend'></Date>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Frontend