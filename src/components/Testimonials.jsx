import React, { useState } from 'react'
import '../styles/testimonials.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import face from '../assets/face.jpg'
import woman from '../assets/woman.jpg'

function Testimonials() {
    const [active, setActive] = useState(false)
    return (
        <div className='testiomonials' >
            <div className={`${!active ? 'active' : 'disable'}`}>
                <div className='arrow__left' onClick={() => { setActive(true) }} >
                    <AiOutlineArrowLeft></AiOutlineArrowLeft>
                </div>
                <section >
                    <article className='testimonials__article'>
                        <p className='testimonials__paragraph'>
                            “ If you want to lay the best foundation possible Id recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”

                            John Tarkpor Junior Front-end Developer
                            John Tarkpor
                            quotation marks
                            “ Ive been interested in coding for a while but never taken the jump, until now. I couldnt recommend this course enough. Im now in the job of my dreams and so excited about the future. ”

                            Tanya Sinclair UX Engineer
                            Tanya Sinclair
                            quotation marks
                            “ If you want to lay the best foundation possible Id recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”
                        </p>
                        <h5 className='testimonials__name'>Dua - UX Designer</h5>
                    </article>
                </section>
                <img className='testimonials__image' src={woman} alt="testimonial" />
                <div className="arrow__right"  onClick={() => { setActive(true) }} >
                    <AiOutlineArrowRight/>
                </div>
            </div>           
            <div className={`${active ? 'active' : 'disable'}`}>
                <div className='arrow__left' onClick={() => { setActive(false) }}>
                    <AiOutlineArrowLeft ></AiOutlineArrowLeft>
                </div>
                <section>
                    <article className='testimonials__article'>
                        <p className='testimonials__paragraph'>
                            “ If you want to lay the best foundation possible Id recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”

                            John Tarkpor Junior Front-end Developer
                            John Tarkpor
                            quotation marks
                            “ Ive been interested in coding for a while but never taken the jump, until now. I couldnt recommend this course enough. Im now in the job of my dreams and so excited about the future. ”

                            Tanya Sinclair UX Engineer
                            Tanya Sinclair
                            quotation marks
                            “ If you want to lay the best foundation possible Id recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”
                        </p>
                        <h5 className='testimonials__name'>Bran - Frontend</h5>
                    </article>
                </section>
                <img className='testimonials__image' src={face} alt="testimonial" />
                <div className="arrow__right" onClick={() => { setActive(false) }}>
                    <AiOutlineArrowRight  />
                </div>
            </div>
        </div>
    )
}

export default Testimonials