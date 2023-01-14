import React, { useState } from 'react'
import '../styles/testimonials.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import face from '../assets/face.jpg'

function Testimonials() {
    const [active, setActive] = useState(false)
    return (
        <div className='testiomonials'>
            <div className='arrow__left'>
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
            <img className='testimonials__image' src="https://static.litmind.com/uu4PAYxXJYtXPp4FthCkej0JQmUBGpHU.PhotoSingleImage.2848292.big.jpg" alt="" />
            <div className="arrow__right">
                <AiOutlineArrowRight onClick={() => { setActive(true) }} />
            </div>
            {/* 2 */}
            {/* SECCION 2 */}
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
                    <h5 className='testimonials__name'>Dua - UX Designer</h5>
                </article>
            </section>
            <img className='testimonials__image' src={face} alt="" />

        </div>
    )
}

export default Testimonials