import React from 'react'
import s from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={s.contact}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Свяжитесь с нами</h2>
                <p className="section-description">
                    Готовы обсудить ваш проект? Напишите нам!
                </p>
            </div>
            <div className={s["contact-content"]}>
                <form className={s["contact-form"]}>
                    <div className={s["form-group"]}>
                        <input type="text" className={s["form-input"]} placeholder="Ваше имя" required />
                    </div>
                    <div className={s["form-group"]}>
                        <input type="email" className={s["form-input"]} placeholder="Email" required />
                    </div>
                    <div className={s["form-group"]}>
                        <textarea className={s["form-textarea"]} placeholder="Ваше сообщение" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Отправить сообщение</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact