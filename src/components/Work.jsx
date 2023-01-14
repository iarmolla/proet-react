import React from 'react'
import '../styles/work.css'
import work from '../assets/work.svg'
import modality from '../assets/modality.svg'
import accenture from '../assets/accenture.png'
import mercadolibre from '../assets/mercadolibre.png'
import uala from '../assets/uala.png'
import banco from '../assets/banco.svg'
import provincia from '../assets/provincia.svg'


function Work() {
    return (
        <>
            <div className='work work--future'>
                <section className='work__section work__section--modality'>
                    <h1 className='work__title'>El futuro creado por Proet</h1>
                    <p className='work__item'>Estamos orgullosos de educar a las personas que trabajan en empresas y equipos que transforman a la industria.</p>
                </section>              
                <div class="slider">
                    <div class="slide-track">
                        <div className='slide'>
                            <img src={mercadolibre} alt="accenture" className='image__company' />
                        </div>                    
                        <div className='slide'>
                            <img src={uala} alt="accenture" className='image__company' />
                        </div>   
                        <div className='slide'>
                            <img src={banco} alt="accenture" className='image__company' />
                        </div>  
                        <div className='slide'>
                            <img src={provincia} alt="accenture" className='image__company' />
                        </div> 
                        <div className='slide'>
                            <img src="https://www.pwc.com.ar/etc.clientlibs/pwc/clientlibs/rebrand-clientlibs/components-colors/resources/images/slim-header-v2/PwC-logo.svg" alt="accenture" className='image__company' />
                        </div>                                                            
                        <div className='slide'>
                            <img src={accenture} alt="accenture" className='image__company' />
                        </div>         
                        <div className='slide'>
                            <img src={mercadolibre} alt="accenture" className='image__company' />
                        </div>                    
                        <div className='slide'>
                            <img src={uala} alt="accenture" className='image__company' />
                        </div>   
                        <div className='slide'>
                            <img src={banco} alt="accenture" className='image__company' />
                        </div>  
                        <div className='slide'>
                            <img src={provincia} alt="accenture" className='image__company' />
                        </div> 
                        <div className='slide'>
                            <img src="https://www.pwc.com.ar/etc.clientlibs/pwc/clientlibs/rebrand-clientlibs/components-colors/resources/images/slim-header-v2/PwC-logo.svg" alt="accenture" className='image__company' />
                        </div>                                                            
                        <div className='slide'>
                            <img src={accenture} alt="accenture" className='image__company' />
                        </div>     
                                      
                    </div>
                </div>
            </div>
            <div className='work work--modality'>
                <section className='work__section work__section--modality'>
                    <h1 className='work__title'>Modalidades de estudio</h1>
                    <p className='work__paragraph'>Plan de estudios diseñadado para tener una carrera exitosa en tech.</p>
                    <article className='work__modality'>
                        <div>
                            <span className='work__subtitle'>Part-time</span>
                            <p className='work__item'>Diseñada exclusivamente para aquellos que quieren aprender programación mientras trabajan. Estudia 3 horas por día con clases 100% a remoto y en vivo</p>
                        </div>
                        <div>
                            <span className='work__subtitle'>Full-time</span>
                            <p className='work__item'>Es la modalidad ideal para quienes quieren empezar una carrera en tecnología en muy poco tiempo. Estudia 8 horas diaras con clases 100% a remoto y en vivo.</p>
                        </div>
                    </article>
                </section>
                <picture>
                    <img src={modality} alt="work" className='work__image work__image--modality' />
                </picture>
            </div>
            <div className='work'>
                <section className='work__section'>
                    <h1 className='work__title'>Carrer Advisor</h1>
                    <p className='work__paragraph'>Ingresa al mundo laboral acompañado por nuestros asesores de carrera, quienes te asistirán en tu camino profesional.</p>
                    <article>
                        <ul className='work__items'>
                            <li className='work__item'>Assessment: Te ayudaremos a armar un CV Tech de impacto.</li>
                            <li className='work__item'>Portfolio: Compartiremos tus proyectos en LinkedIn, Behance y GitHub.</li>
                            <li className='work__item'>Roleplays: Simularemos entrevistas de trabajo.</li>
                        </ul>
                    </article>
                </section>
                <picture>
                    <img src={work} alt="work" className='work__image' />
                </picture>
            </div>
        </>
    )
}

export default Work