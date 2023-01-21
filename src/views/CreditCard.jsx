import React from 'react'
import { Formik } from "formik";
import { useState, useRef } from "react";
import money from '../assets/money.svg'
import '../styles/credit.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import validate from '../services/emailValidation'
AOS.init();

function CreditCard() {
  const params = useParams()
  const [type, setType] = useState();
  const [fail, setFail] = useState('')
  const navigate = useNavigate()
  const [focus, setFocus] = useState(false)
  const GetCardType = (number) => {
    // visa
    var re = new RegExp("^4");
    if (number.match(re) != null)
      return "Visa";
    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number))
      return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
      return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
      return "Discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
      return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null)
      return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
      return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null)
      return "Visa Electron";

    return "";
  }
  const form = useRef();
  return (
    <main>
      <Navbar hide={'hide'}></Navbar>
      <section data-aos="fade-right" data-aos-duration="1000">
        <Formik
          initialValues={{
            name: "",
            email: "",
            number: "",
            cvc: "",
            date: "",
            type: "default",
          }}
          validate={(values) => {
            const errors = {};
            let typeOfTarget = GetCardType(values.number)
            setType(typeOfTarget)            
            const validateText = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$');
            const validateDate = new RegExp('([0-9]{2})/([0-9]{2})')
            const validateEmail = new RegExp(/\S+@\S+\.\S+/)
            const validateCode = new RegExp('^[0-9]*$')           
            if (!values.name) {
              errors.name = "Completar campo";
            }
            else if (!validateText.test(values.name)) {
              errors.name = "El nombre debe ser un formato valido";
            }
            if (!values.number) {
              errors.number = "Completar campo";
            }                   
            else if (typeOfTarget != 'Visa' && typeOfTarget != 'Mastercard' && typeOfTarget != 'AMEX' &&  typeOfTarget != 'JCB' &&  typeOfTarget != 'Discover') {
              errors.number = "Ingresar una tarjeta valida y sin espacios";
            }
            if (!values.email) {
              errors.email = "Completar campo";
            }
            else if (!validateEmail.test(values.email)) {
              errors.email = "El email debe ser un formato valido";

            }
            if (!values.date) {
              errors.date = "Completar campo";
            }
            else if (!validateDate.test(values.date)) {
              errors.date = "La fecha debe ser MM/YY";
            }
            if (!values.cvc) {
              errors.cvc = "Completar campo";
            }
            else if (!validateCode.test(values.cvc)) {
              errors.cvc = "Debe contener solo numeros"
            }
            return errors;
          }}
          onSubmit={(values) => {
            validate(values.email).then((res) => {
              if (res === 'DELIVERABLE') {
                emailjs.sendForm('service_b89kagj', 'template_9h53ogr', form.current, 'TRRFB1mFJQx0bDmUP')
                setFail('DELIVERABLE')
                setTimeout(() => {
                  navigate('/subscription')
                }, 1000)
              }
              else if (res === 'UNDELIVERABLE') {
                setFail('UNDELIVERABLE')
              }
            }).catch(() => {
              setFail('error')
            })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <article className="container">
              <section className="credit-card">
                <img
                  src={money}
                  className="stats"
                  alt="card"
                />
                {/* DEFAULT */}
                <div className={`${type !== "Visa" && type !== "Mastercard" ? 'standar default__active' : 'default__disable'}`}>
                  <div className={`credit__card__mastercard ${focus ? 'credit__card__animate' : ''}`} >
                    <div className={`credit__card ${focus ? 'credit__card--disable' : 'credit__card--active'}`}>
                      <div className="card__chip"></div>
                      <span className="card__hide">{values.number || "**** **** **** ****"}</span>
                      <span className="card__name">{values.name || "NAME"}</span>
                      <span className="card__date">{values.date || "MM/YY"}</span>
                    </div>
                    <div className={`credit__card card__back ${focus ? ' card__back--active' : 'card__back--disable'}`} >
                      <div className="card__line">
                        <span className="card__code card__code--">{values.cvc || "CVC"}</span>
                      </div>
                      <div className="card__cvc"></div>
                    </div>
                  </div>
                </div>
                {/* MASTERCARD */}
                <div className={`${type == "Mastercard" ? 'master mastercard__active' : 'mastercard__disable'}`}>
                  <div className={`credit__card__mastercard credit__card__mastercard__front ${focus ? 'credit__card__animate' : ''}`}>
                    <div className={`card__front ${focus ? 'credit__card--disable' : 'credit__card--active'}`}>
                      <div className="card__chip"></div>
                      <div className="credit__card__mastercard__logo"></div>
                      <span className="card__hide">{values.number || "**** **** **** ****"}</span>
                      <span className="card__name">{values.name || "NAME"}</span>
                      <span className="card__date">{values.date || "MM/YY"}</span>
                    </div>
                    <div className={`credit__card__mastercard card__back ${focus ? 'card__back--active' : 'card__back--disable'}`}>
                      <div className="card__line">
                        <span className="card__code">{values.cvc || "CVC"}</span>
                      </div>
                      <div className="credit__card__mastercard__logo credit__card__mastercard__logo--"></div>
                      <div className="card__cvc"></div>
                    </div>
                  </div>
                </div>
                {/* VISA */}
                <div className={`${type === "Visa" ? 'visa visa__active' : 'visa__disable'}`}>
                  <div className={`credit__card__mastercard credit__card__mastercard__front ${focus ? 'credit__card__animate' : ''}`}>
                    <div className={`credit__card__visa ${focus ? 'credit__card--disable' : 'credit__card--active'}`}>
                      <div className="card__chip"></div>
                      <div className="credit__card__visa__logo"></div>
                      <span className="card__hide">{values.number || "**** **** **** ****"}</span>
                      <span className="card__name">{values.name || "NAME"}</span>
                      <span className="card__date">{values.date || "MM/YY"}</span>
                    </div>
                    <div className={`credit__card__visa card__back__visa ${focus ? 'card__back--active' : 'card__back--disable'}`}>
                      <div className="card__line">
                        <span className="card__code card__code--">{values.cvc || "CVC"}</span>
                      </div>
                      <div className="credit__card__visa__logo credit__card__visa__logo--"></div>
                      <div className="card__cvc"></div>
                    </div>
                  </div>
                </div>
              </section>
              <form onSubmit={handleSubmit} ref={form} >
                <section className="form__section">
                  <article className="form__group">
                    <label className='form__label'>CARDHOLDER NAME</label>
                    <input type="text" placeholder="name" name="name" value={values.name} maxLength="12" onChange={handleChange} onBlur={handleBlur} />
                  </article>
                  <div>
                    <label className='form__error'>{touched.name && errors.name}</label>
                  </div>
                  <article className="form__group">
                    <label className='form__label'>EMAIL</label>
                    <input type="text" placeholder="email" name="email" value={values.email} maxLength="26" onChange={handleChange} onBlur={handleBlur} />
                  </article>
                  <div>
                    <label className='form__error'>{touched.email && errors.email}</label>
                  </div>
                  <article className="form__group">
                    <label htmlFor="" className='form__label'>CARD NUMBER</label>
                    <input type="text" placeholder="number" name="number" maxLength={16} value={values.number} onChange={handleChange} onBlur={handleBlur} />
                  </article>
                  <div>
                    <label className='form__error'>{touched.number && errors.number}</label>
                  </div>
                  <article className="form__group">
                    <div className="form__group">
                      <label htmlFor="" className='form__label'>DATE</label>
                      <input type="text" placeholder="date" name="date" maxLength={5} value={values.date} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                  </article>
                  <div>
                    <label className='form__error'>{touched.date && errors.date}</label>
                  </div>
                  <article className="form__group">
                    <div className="form__group">
                      <input type="text" style={{ display: 'none' }} value={params.type} name={'type'} />
                      <input type="text" style={{ display: 'none' }} value={params.hours} name={'hours'} />
                      <input type="text" style={{ display: 'none' }} value={params.date} name={'day'} />
                      <label htmlFor="">CVC</label>
                      <input type="text" placeholder="cvc" name="cvc" maxLength={4} value={values.cvc} onBlurCapture={handleBlur} onChange={handleChange} onClick={() => {
                        setFocus(true)
                      }} onBlur={() => {
                        setFocus(false)
                      }} onFocus={() => {
                        setFocus(true)
                      }} />
                    </div>
                  </article>
                  <div>
                    <label className='form__error'>{touched.cvc && errors.cvc}</label>
                  </div>
                  <article>                    
                    <button className="ov-btn-slide-left ov-btn-slide-left--outline btn--confirm">Confirmar</button>
                  </article>
                </section>
                {fail == 'DELIVERABLE' ?
                  <div className='form__success'>
                    <label className='form__error form__error--sucess'>Inscripción exitosa!</label>
                  </div> : fail == 'UNDELIVERABLE' ?
                    <div className='form__error--email'>
                      <label className='form__error'>El email es invalido</label>
                    </div> : fail == 'error' ? <div className='form__error--email'>
                      <label className='form__error'>El email es invalido</label>
                    </div> : ''}
              </form>
            </article>
          )}
        </Formik>
      </section>
      <Footer></Footer>

    </main >
  )
}

export default CreditCard