import React from 'react'
import "./Header.css"
import CTA from './CTA'
import Me from "../../assets/ans1a.png"
import Headersocial from './Headersocial'
import Navbar from './Navbar'
const Header = () => {
  return (
         <>
        <Navbar/>
        <header>
        <div className="container header__container con1">
            <h5>Hello I'm</h5>
            <h1>Anshul Kumar</h1>
            <h5 className='text-light'>Flutter Developer | FrontEnd Developer</h5>
            <CTA/>
            <Headersocial/>
            <div className="me">
                <img src={Me} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
        </header>
        </>
  )
}

export default Header
