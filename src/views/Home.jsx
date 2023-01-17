import React from 'react'
import '../styles/home.css'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Work from '../components/Work'
import curso from '../assets/curso.svg'
import wave from '../assets/wave.svg'
import Certificate from '../components/Certificate'
import Acordion from '../components/Acordion'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Home() {
    return (
        <>
            <div className='landing'>
                <img src={wave} className="wave" alt="wave" />
                <section className='landing__section'>
                    <h1 className='landing__title'>Proet Cursos</h1>
                    <span className='landing__subtitle'>Llevamos la capacitación al siguiente nivel!</span>
                    <a href="#course" className="ov-btn-slide-left">VER MÁS</a>
                </section>
                <section>
                    <img src={curso} className="landing__image" alt="curso" />
                </section>
            </div>
            <div className='landing__pricing' id="course" data-aos="fade-right" data-aos-duration="1000">
                <h1 className='work__title' >DEVELOPER</h1>
                <Pricing></Pricing>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
                <Work></Work>
            </div>
            <div id="certificate">
                <Certificate></Certificate>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='work__testimonials' id="testimonials">Testimonios</h1>
                <Testimonials></Testimonials>
            </div>
            <div id="questions" data-aos="fade-right" data-aos-duration="1000">
                <Acordion></Acordion>
            </div>
        </>
    )
}

export default Home