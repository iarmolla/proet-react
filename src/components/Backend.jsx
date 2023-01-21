import React from 'react'
import back from '../assets/back.svg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Date from '../components/Date'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Backend() {
    return (
        <div>
            <Navbar hide='hide'></Navbar>
            <div className='work work__backend' data-aos="fade-right" data-aos-duration="1000">
                <section className='work__section'>
                    <h1 className='work__title'>Backend developer</h1>
                    <p className='work__paragraph'>En este curso aprenderas las tecnologias mas demandas del mercado.</p>
                    <article>
                        <ul className='work__items work__items--backend'>
                            <li className='work__item'>JAVA.</li>
                            <li className='work__item'>JAVASCRIPT.</li>
                            <li className='work__item'>C#</li>
                            <li className='work__item'>CSS</li>
                        </ul>
                        <a href="#backend" className="ov-btn-slide-left ov-btn-slide-left--outline backend">COMPRAR</a>                       
                    </article>
                </section>
                <picture>
                    <img src={back} alt="work" className='work__image' />
                </picture>
            </div>
            <section className='frontend__section' data-aos="fade-right" data-aos-duration="1000">
                <span className='frontend__title'>Sobre el curso</span>
                <p className='frontend__item'>
                    Aprende a programar desde cero con Java hasta avanzado utilizando el mejor IDE IntelliJ IDEA (versión community o free)
                    Incluye mas de 50 tareas y desafíos a desarrollar con las soluciones que te preparan para postulaciones de trabajo y certificaciones.
                    Domina la programación funcional de Java 8 con Expreciones Lambda y el API Stream
                    Comprende Java y el paradigma de la programación orientada a objetos para futuros trabajos
                    Aprende Java desde cero usando las mejores prácticas POO, sus principios y Patrones de Diseños
                    Aprende a escribir pruebas unitarias con JUnit 5 y Mockito
                    Domina los Threads (hilos) y aplicaciones concurrentes en Java
                    Aprende a manejar errores haciendo uso de Excepciones
                    Desarrolla una aplicación web completa con Jakarta EE 9 (Java EE9) y Servlet/JSP con JDBC (Bases de Datos), incluye carro de compras, sistema login de usuarios
                    Aprende al detalle Inyección de Dependencias y Contextos con Weld CDI de Jakarta EE 9
                    Aprende al detalle Enterprise JavaBeans (EJB 4), JPA, API RESTful (JAX-RS), Web Services SOAP (JAX-WS), JSF, PrimeFaces, Seguridad JAAS, JBoss Wildfly
                    Desarrollar aplicaciones web reales utilizando Spring Framework 5 con Spring Boot y Data JPA.
                    Desarrolla una aplicación Full Stack completa con Spring 5 y Angular + JPA + API Restful.
                    Al finalizar el curso, serás capaz de presentarte y aprobar el examen de certificación de Java Oracle
                </p>
            </section>
            <section id="backend" data-aos="fade-right" data-aos-duration="1000">
                <Date course='backend'></Date>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Backend