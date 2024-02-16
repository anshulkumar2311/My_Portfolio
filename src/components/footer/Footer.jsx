import React from 'react'
import "./Footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>
        Anshul Kumar
      </a>
      <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#testonomial">testonomial</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/anshulkumar2311/" target='_blank' rel="noopener"><BsLinkedin/></a>
        <a href="https://github.com/anshulkumar2311" target='_blank' rel="noopener"><FaGithubSquare/></a>
        <a href="https://www.instagram.com/anshulkumar2311/" target='_blank' rel="noopener"><FaInstagramSquare/></a>
        <a href="https://twitter.com/anshulkumar2311" target='_blank' rel="noopener"><FaTwitterSquare/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Anshul Kumar. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
