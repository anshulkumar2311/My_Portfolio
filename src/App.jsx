import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav.jsx"
import About from "./components/about/About.jsx"
import Experience from './components/experience/Experience'
import Testonomial from './components/testonomial/testonomial.jsx'
import Footer from './components/footer/Footer'
import Services from './components/services/Services.jsx'
import Contact from './components/contact/Contact.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Gallery from './components/gallery/Gallery.jsx'



const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio />
    <Contact/>
    <Testonomial />
    <Gallery/>
    <Footer/>  
    </>
  )
}

export default App
