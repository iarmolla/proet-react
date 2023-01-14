import React from 'react'
import '../styles/home.css'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Work from '../components/Work'
import curso from '../assets/curso.svg'
import wave from '../assets/wave.svg'

function Home() {
    return (
        <>
            <div className='landing'>
                <img src={wave} className="wave" alt="wave" />
                <section className='landing__section'>
                    <h1 className='landing__title'>Proet Cursos</h1>
                    <span className='landing__subtitle'>Llevamos la capacitación al siguiente nivel!</span>
                    <a href="#" class="ov-btn-slide-left">VER MÁS</a>
                </section>
                <section>
                    <img src={curso} className="landing__image" alt="curso" />
                </section>
            </div>
            <div className='landing__pricing'>
                <h1 className='work__title'>DEVELOPER</h1>
                <Pricing></Pricing>
            </div>
            <div>
                <Work></Work>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
            
        </>
    )
}

export default Home