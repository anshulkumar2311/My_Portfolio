import React,{useEffect} from 'react'
import "./About.css"
import Me from "../../assets/Me2.jpg"
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id='about' data-aos="fade-up-left">
      
      <h5>Get To Know</h5>
      <h2 className='abthead' id='About'>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__me-image">
            <img src={Me} alt="My Image" />
           </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'> 
                 <FaAward className='about__icon'/>
                 <h5>Experience</h5>
                 <small>1+ Year Working</small>
              </article>
              <article className='about__card'> 
                 <VscFolderLibrary className='about__icon'/>
                 <h5>Projects</h5>
                 <small>10+ Overall</small>
              </article>
              <article className='about__card'> 
                 <FiUsers className='about__icon'/>
                 <h5>Clients</h5>
                 <small>1+ worldwide</small>
              </article>
            </div>

            <p>I’m Anshul Kumar final year student of Indian Institute of Information Technology Una, CSE Branch(2024 Batch).
            Throughout my academic journey, I've honed my skills by creating over 10+ projects spanning both Flutter and web development. My hands-on experience includes two enriching internships: one at Gauge.ro as a Flutter Developer and another at JNR Enterprises as a Technical Engineering Intern. These opportunities have not only expanded my technical expertise but also nurtured my professional growth, preparing me for a dynamic career in software development.
            </p>
             
            <a href="#Contact" className='btn btn-primary btnabt'>Let's Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About
