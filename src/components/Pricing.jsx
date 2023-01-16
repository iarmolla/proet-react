import React from 'react'
import '../styles/pricing.css'

function Pricing() {
    return (
        <div className='pricing'>
            <section className='pricing__card' >
                <article className='card__title'>
                    <h3 className='pricing__title'>Backend</h3>
                </article>
                <article className='pricing__group'>
                    <span>$</span>
                    <span className='pricing__price'>99.99</span>
                </article>
                <article className='pricing__list'>
                    <span>Incluye</span>
                    <p>Html</p>
                    <p>Css</p>
                    <p>Javascript</p>
                    <p>React</p>
                </article>
                <a href="#" class="ov-btn-slide-left ov-btn-slide-left--outline">COMPRAR</a>
            </section>
            <section className='pricing__card pricing__card--active'>
                <article className='card__title'>
                    <h3 className='pricing__title'>FullStack</h3>
                </article>
                <article className='pricing__group'>
                    <span>$</span>
                    <span className='pricing__price'>244.99</span>
                </article>
                <article className='pricing__list'>
                    <span>Incluye</span>
                    <p className='list__item'>Html</p>
                    <p>Css</p>
                    <p>Javascript</p>
                    <p>React</p>
                </article>
                <a href="#" class="ov-btn-slide-left ov-btn-slide-left--outline">COMPRAR</a>
            </section>
            <section className='pricing__card'>
                <article className='card__title'>
                    <h3 className='pricing__title'>Frontend</h3>
                </article>
                <article className='pricing__group'>
                    <span>$</span>
                    <span className='pricing__price'>99.99</span>
                </article>
                <article className='pricing__list'>
                    <span>Incluye</span>
                    <p>Html</p>
                    <p>Css</p>
                    <p>Javascript</p>
                    <p>React</p>
                </article>
                <a href="#" class="ov-btn-slide-left ov-btn-slide-left--outline">COMPRAR</a>
            </section>
        </div>
    )
}

export default Pricing