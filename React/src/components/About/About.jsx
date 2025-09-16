import React from 'react'
import s from './About.module.css'

function About() {
  return (
    <section id="about" className={s.about}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">О нашей компании</h2>
                <p className="section-description">
                    Мы команда профессионалов с многолетним опытом работы
                </p>
            </div>
            <div className={s['about-grid']}>
                <div className={s["about-card"]}>
                    <div className={s["about-icon"]}>🎯</div>
                    <h3>Точность</h3>
                    <p>Выполняем задачи с максимальной точностью и вниманием к деталям</p>
                </div>
                <div className={s["about-card"]}>
                    <div className={s["about-icon"]}>⚡</div>
                    <h3>Скорость</h3>
                    <p>Быстрое выполнение проектов без потери качества</p>
                </div>
                <div className={s["about-card"]}>
                    <div className={s["about-icon"]}>🛡️</div>
                    <h3>Надежность</h3>
                    <p>Гарантируем стабильность и долгосрочное сотрудничество</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About