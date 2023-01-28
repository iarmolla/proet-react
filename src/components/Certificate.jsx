import React from 'react'
import '../styles/certificate.css'
import certificate from '../assets/certificate.svg'

function Certificate() {
    return (
        <section className='certificate' data-aos="fade-right" data-aos-duration="1000">
            <article className='certificate__section'>
                <h1 className='certificate__title'>Cursos certificados</h1>
                <h2 className='certificate__subtitle'>Nuestros cursos están <span className='subtitle__certificate'>certificados</span> por las empresas digitales líderes de Latinoamérica.</h2>
                <p className='certificate__paragraph'>
                    Al contar con una certificación oficial, podrás demostrar que dominas un área específica. Estas certificaciones tienen validez a nivel internacional, y permiten posicionarte para búsquedas laborales en empresas tecnológicas.
                </p>
            </article>
            <article>
                <img src={certificate} className="certificate__image" alt="certificate" />
            </article>
        </section>
    )
}

export default Certificate