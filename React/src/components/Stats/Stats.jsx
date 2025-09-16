import React from 'react'
import s from './Stats.module.css'

function Stats() {
  return (
    <section className={s.stats}>
        <div className="container">
            <div className={s["stats-grid"]}>
                <div className={s["stat-item"]}>
                    <div className={s["stat-number"]}>500+</div>
                    <div className={s["stat-label"]}>Довольных клиентов</div>
                </div>
                <div className={s["stat-item"]}>
                    <div className={s["stat-number"]}>1000+</div>
                    <div className={s["stat-label"]}>Выполненных проектов</div>
                </div>
                <div className={s["stat-item"]}>
                    <div className={s["stat-number"]}>5</div>
                    <div className={s["stat-label"]}>Лет опыта</div>
                </div>
                <div className={s["stat-item"]}>
                    <div className={s["stat-number"]}>24/7</div>
                    <div className={s["stat-label"]}>Поддержка</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats