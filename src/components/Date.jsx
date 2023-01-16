import React from 'react'
import '../styles/date.css'
import { Link } from "react-router-dom";

function Date() {
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
                            30-1-2023 31-5-2023
                        </td>
                        <td>4 Meses</td>
                        <td>
                            19:00 - 22:00
                        </td>
                        <div className='date__line'></div>
                    </tr>
                    <Link to="/credit" className="ov-btn-slide-left ov-btn-slide-left--outline date__button">INSCRIBIRSE</Link>
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
                            30-5-2023 31-10-2023
                        </td>
                        <td>5 Meses</td>
                        <td>
                            9:00 - 13:00
                        </td>
                        <div className='date__line'></div>
                    </tr>
                    <Link to="/credit" className="ov-btn-slide-left ov-btn-slide-left--outline date__button">INSCRIBIRSE</Link>
                </table>

            </article>

        </section>
    )
}

export default Date