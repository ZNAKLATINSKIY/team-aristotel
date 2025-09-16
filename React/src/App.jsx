import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import Stats from './components/Stats/Stats.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Services/>
    <Stats/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App