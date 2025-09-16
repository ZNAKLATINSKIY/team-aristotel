import React from 'react'
import s from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={s.hero}>
        <div className="container">
            <div className={s["hero-content"]}>
                <h1 className={s["hero-title"]}>Профессиональные Решения для Вашего Бизнеса</h1>
                <p className={s["hero-description"]}>
                    Мы предоставляем качественные услуги и инновационные решения, 
                    которые помогут вашему бизнесу достичь новых высот
                </p>
                <div className={s["hero-buttons"]}>
                    <button className="btn btn-primary">Начать сейчас</button>
                    <button className="btn btn-secondary">Узнать больше</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero