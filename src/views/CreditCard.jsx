import React from 'react'
import { Formik } from "formik";
import { useState } from "react";
import money from '../assets/money.svg'
import '../styles/credit.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

function CreditCard() {
  const [type, setType] = useState();
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
  return (
    <main>
      <Navbar hide={'hide'}></Navbar>
      <section>
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
            let type = GetCardType(values.number)
            setType(type)
            const validateNumbers = "^[0-9]+$"
            const errors = {};
            if (!values.name) {
              errors.name = "Completar campo";
            }
            if (!values.number) {
              errors.number = "Completar campo";
            }
            if (!values.email) {
              errors.email = "Completar campo";
            }
            if (!values.date) {
              errors.date = "Completar campo";
            }
            if (!values.cvc) {
              errors.cvc = "Completar campo";
            }
            return errors;
          }}
          onSubmit={() => {
            navigate('/subscription')
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
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
              <form onSubmit={handleSubmit}>
                <section className="form__section">
                  <article className="form__group">
                    <label>CARDHOLDER NAME</label>
                    <input type="text" placeholder="name" name="name" value={values.name} maxLength="12" onChange={handleChange} />
                  </article>
                  <div>
                    <label className='form__error'>{errors.name}</label>
                  </div>
                  <article className="form__group">
                    <label>EMAIL</label>
                    <input type="text" placeholder="email" name="email" value={values.email} maxLength="12" onChange={handleChange} />
                  </article>
                  <div>
                    <label className='form__error'>{errors.email}</label>
                  </div>
                  <article className="form__group">
                    <label htmlFor="">CARD NUMBER</label>
                    <input type="text" placeholder="number" name="number" maxLength={16} value={values.number} onChange={handleChange} />
                  </article>
                  <div>
                    <label className='form__error'>{errors.number}</label>
                  </div>
                  <article className="form__group">
                    <div className="form__group">
                      <label htmlFor="">DATE</label>
                      <input type="text" placeholder="date" name="date" maxLength={5} value={values.date} onChange={handleChange} />
                    </div>
                  </article>
                  <div>
                    <label className='form__error'>{errors.date}</label>
                  </div>
                  <article className="form__group">
                    <div className="form__group">
                      <label htmlFor="">CVC</label>
                      <input type="text" placeholder="cvc" name="cvc" maxLength={4} value={values.cvc} onChange={handleChange} onClick={() => {
                        setFocus(true)
                      }} onBlur={() => {
                        setFocus(false)
                      }} onFocus={() => {
                        setFocus(true)
                      }} />
                    </div>
                  </article>
                  <div>
                    <label className='form__error'>{errors.cvc}</label>
                  </div>
                  <article>
                    <button className='form__submit'>Confirm</button>
                  </article>
                </section>
              </form>
            </article>
          )}
        </Formik>
      </section>
      <Footer></Footer>

    </main>
  )
}

export default CreditCard