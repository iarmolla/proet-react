import React from 'react'
import '../styles/pricing.css'
import { Link } from "react-router-dom";

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
                    <p>Java.</p>
                    <p>Javascript.</p>
                    <p>C#</p>
                    <p>Css</p>
                </article>
                <Link to="/backend" className="ov-btn-slide-left ov-btn-slide-left--outline">VER MÁS</Link>
            </section>
            <section className='pricing__card pricing__card--active'>
                <article className='card__title'>
                    <h3 className='pricing__title'>FullStack</h3>
                </article>
                <article className='pricing__group'>
                    <span>$</span>
                    <span className='pricing__price'>144.99</span>
                </article>
                <article className='pricing__list'>
                    <span>Incluye</span>
                    <p className='list__item'>React</p>
                    <p>Node</p>
                    <p>SQL</p>
                    <p>Nest</p>
                </article>
                <Link to="/fullstack" className="ov-btn-slide-left ov-btn-slide-left--outline">VER MÁS</Link>
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
                <Link to="/frontend" className="ov-btn-slide-left ov-btn-slide-left--outline">VER MÁS</Link>
            </section>
        </div>
    )
}

export default Pricing