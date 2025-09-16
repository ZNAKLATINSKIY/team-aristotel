import React from 'react'
import s from './Header.module.css'

function Header() {
  return (
    <header className={s.header}>
        <div className="container">
            <div className={s['header-content']}>
                <div className="logo">
                    <h2>МояКомпания</h2>
                </div>
                <nav className="nav">
                    <ul className={s['nav-list']}>
                        <li><a href="#home" className={s["nav-link"]}>Главная</a></li>
                        <li><a href="#about" className={s["nav-link"]}>О нас</a></li>
                        <li><a href="#services" className={s["nav-link"]}>Услуги</a></li>
                        <li><a href="#contact" className={s["nav-link"]}>Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header