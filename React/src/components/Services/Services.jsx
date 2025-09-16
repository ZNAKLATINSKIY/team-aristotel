import React from 'react'
import s from './Services.module.css'

function Services() {
  return (
    <section id="services" className={s.services}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Наши услуги</h2>
                <p className="section-description">
                    Полный спектр профессиональных услуг для вашего бизнеса
                </p>
            </div>
            <div className={s['services-grid']}>
                <div className={s["service-card"]}>
                    <div className={s["service-icon"]}>💻</div>
                    <h3>Веб-разработка</h3>
                    <p>Создание современных и функциональных веб-сайтов</p>
                    <button className="btn btn-outline">Подробнее</button>
                </div>
                <div className={s["service-card"]}>
                    <div className={s["service-icon"]}>📱</div>
                    <h3>Мобильные приложения</h3>
                    <p>Разработка приложений для iOS и Android</p>
                    <button className="btn btn-outline">Подробнее</button>
                </div>
                <div className={s["service-card"]}>
                    <div className={s["service-icon"]}>🎨</div>
                    <h3>Дизайн</h3>
                    <p>Создание уникального и привлекательного дизайна</p>
                    <button className="btn btn-outline">Подробнее</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services