import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa"
import Sidebar from '../sidebar/Sidebar';
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar1">
        <Sidebar/>
        <div className="wrapper1">
        <motion.span className='heading'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Anshul Kumar
        </motion.span >   
        {/* <h3 className='heading'>Anshul Kumar</h3> */}
        <div className="social">
        <a href="https://www.linkedin.com/in/anshulkumar2311/" target='_blank' rel="noopener" className='icons'><BsLinkedin/></a>
        <a href="https://github.com/anshulkumar2311" target='_blank' rel="noopener" className='icons'><FaGithubSquare/></a>
        <a href="https://www.instagram.com/anshulkumar2311/" target='_blank' rel="noopener" className='icons'><FaInstagramSquare/></a>
        <a href="https://twitter.com/anshulkumar2311" target='_blank' rel="noopener" className='icons'><FaTwitterSquare/></a>
        </div>
        </div>  
        </div>  
  )
}

export default Navbar
