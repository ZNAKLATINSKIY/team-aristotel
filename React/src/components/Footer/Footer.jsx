import React from 'react'
import s from './Footer.module.css'

function Footer() {
  return (
    <footer className={s.footer}>
        <div className="container">
            <div className={s["footer-content"]}>
                <div className={s["footer-section"]}>
                    <h3>МояКомпания</h3>
                    <p>Профессиональные решения для вашего бизнеса</p>
                </div>
                <div className={s["footer-section"]}>
                    <h4>Услуги</h4>
                    <ul className={s["footer-links"]}>
                        <li><a href="#">Веб-разработка</a></li>
                        <li><a href="#">Мобильные приложения</a></li>
                        <li><a href="#">Дизайн</a></li>
                    </ul>
                </div>
                <div className={s["footer-section"]}>
                    <h4>Контакты</h4>
                    <ul className={s["footer-links"]}>
                        <li>Email: info@company.ru</li>
                        <li>Телефон: +7 (999) 123-45-67</li>
                        <li>Адрес: г. Москва, ул. Примерная, 123</li>
                    </ul>
                </div>
            </div>
            <div className={s["footer-bottom"]}>
                <p>&copy; 2024 МояКомпания. Все права защищены.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer