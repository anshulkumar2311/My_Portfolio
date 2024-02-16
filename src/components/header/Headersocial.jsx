import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa"
const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anshulkumar2311/" target='_blank' rel="noopener"><BsLinkedin/></a>
        <a href="https://github.com/anshulkumar2311" target='_blank' rel="noopener"><FaGithubSquare/></a>
        <a href="https://www.instagram.com/anshulkumar2311/" target='_blank' rel="noopener"><FaInstagramSquare/></a>
        <a href="https://twitter.com/anshulkumar2311" target='_blank' rel="noopener"><FaTwitterSquare/></a>
      
    </div>
  )
}

export default Headersocial
