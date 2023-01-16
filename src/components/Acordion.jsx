import React, { useState } from 'react'
import '../styles/acordion.css'
import search from '../assets/searching.svg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Acordion() {
    const [mp, setMp] = useState(false)
    const [certificate, setCertificate] = useState(false)
    const [age, setAge] = useState(false)
    const [modality, setModality] = useState(false)
    return (
        <section class="accordion">
            <article className='acordion__section' >
            <h1 className='accordion__title'>Preguntas</h1>
                <ul className='section__items'>
                    <div className='acordion__container' onClick={(() => {
                        setMp(!mp)
                    })}>
                        <div className='acordion__items'>
                            <li className='acordion__item'>¿Cuáles son los medios de pago? </li>
                            <MdOutlineKeyboardArrowRight className={`arrow__disable ${mp ? 'arrow__disable--active' : ''}`} />
                        </div>
                        <div className={`accordion__paragraph ${mp ? 'accordion__paragraph--active' : 'accordion__paragraph--disable'}`}>
                            <p className='accordion__paragraph--'>
                                Podés pagar
                                con tarjeta de crédito o débito a través de Mercado Pago, con dinero en cuenta de Mercado Pago o hacer una transferencia bancaria.
                            </p>
                        </div>
                    </div>
                    <div className='acordion__container' onClick={(() => {
                        setCertificate(!certificate)
                    })}>
                        <div className='acordion__items'>
                            <li className='acordion__item'>¿Entregan una certificación al finalizar el curso? </li>
                            <MdOutlineKeyboardArrowRight className={`arrow__disable ${certificate ? 'arrow__disable--active' : ''}`} />
                        </div>
                        <div className={`accordion__paragraph ${certificate ? 'accordion__paragraph--active' : 'accordion__paragraph--disable'}`}>
                            <p className='accordion__paragraph--'>
                                Sí. En Proet  apuntamos a un nuevo sistema educativo centrado en la práctica y en los resultados demostrables.
                                Una vez que hayas finalizado el Curso Introductorio y entregado los proyectos prácticos a desarrollar, recibirás un certificado que avala los conocimientos adquiridos.
                            </p>
                        </div>                       
                    </div>
                    <div className='acordion__container' onClick={(() => {
                        setAge(!age)
                    })}>
                        <div className='acordion__items'>
                            <li className='acordion__item'>¿Hay límite de edad? </li>
                            <MdOutlineKeyboardArrowRight className={`arrow__disable ${age ? 'arrow__disable--active' : ''}`} />
                        </div>
                        <div className={`accordion__paragraph ${age ? 'accordion__paragraph--active' : 'accordion__paragraph--disable'}`}>
                            <p className='accordion__paragraph--'>
                                No hay limite de edad. 
                            </p>
                        </div>                       
                    </div>
                    <div className='acordion__container' onClick={(() => {
                        setModality(!modality)
                    })}>
                        <div className='acordion__items'>
                            <li className='acordion__item'>¿Puedo cursar desde cualquier lugar? </li>
                            <MdOutlineKeyboardArrowRight className={`arrow__disable ${modality ? 'arrow__disable--active' : ''}`} />
                        </div>
                        <div className={`accordion__paragraph ${modality ? 'accordion__paragraph--active' : 'accordion__paragraph--disable'}`}>
                            <p>
                                Si. Puedes cursar desde cualquier parte, mientras cuentes con conexión a internet.
                            </p>
                        </div>                       
                    </div>
                </ul>
            </article>
            <article>
                <img src={search} className="accordion__image" alt="" />
            </article>
        </section>
    )
}

export default Acordion