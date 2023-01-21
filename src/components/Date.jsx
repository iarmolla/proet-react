import React, { useState } from 'react'
import '../styles/date.css'
import { Link } from "react-router-dom";

function Date({ course }) {
    const [date, setDate] = useState([{ type: course, date: '30-1-2023 31-5-2023', duration: '4 meses', hours: '19:00 - 22:00' }, { type: course, date: '30-5-2023 31-10-2023', duration: '5 meses', hours: '9:00 - 13:00' }])
    return (
        <section className='date'>
            <h1 className='date__title'>Fechas</h1>
            <article className='date__section'>
                <table className='date__list'>
                    <tr>
                        <td>
                            Desde
                        </td>
                        <td>Duracion</td>
                        <td>
                            Horarios
                        </td>
                        <div className='date__line'></div>
                    </tr>
                    <tr>
                        <td>
                            {date[0].date}
                        </td>
                        <td>{date[0].duration}</td>
                        <td>
                            {date[0].hours}
                        </td>
                        <div className='date__line'></div>
                    </tr>
                    <Link to={`/credit/${date[0].type}/${date[0].date}/${date[0].hours}`}  className="ov-btn-slide-left ov-btn-slide-left--outline date__button">INSCRIBIRSE</Link>
                    <tr>
                        <td>
                            Desde
                        </td>
                        <td>Duracion</td>
                        <td>
                            Horarios
                        </td>
                        <div className='date__line'></div>
                    </tr>
                    <tr>
                        <td>
                            {date[1].date}
                        </td>
                        <td>{date[1].duration}</td>
                        <td>
                            {date[1].hours}
                        </td>
                        <div className='date__line'></div>
                    </tr>
                    <Link to={`/credit/${date[1].type}/${date[1].date}/${date[1].hours}`} className="ov-btn-slide-left ov-btn-slide-left--outline date__button">INSCRIBIRSE</Link>
                </table>
            </article>
        </section>
    )
}

export default Date