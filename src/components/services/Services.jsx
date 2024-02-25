import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'> 
      
      <h5 id='Services'>What I Can Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
          <article className='service'>
            <div className='service__head'>
              <h3>Flutter Development</h3>
            </div>
            <ul className='service__list'>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>I actively participated in the development of Flutter applications.</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>leveraging my expertise to build user-friendly and visually appealing interfaces.</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>I effectively collaborated with team members, discussing project requirements, sharing ideas, and providing regular updates on project progress.</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>I remained proactive in learning and adopting new technologies, frameworks, and best practices in Flutter development</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>Overall, my internship at Gauge.ro provided me with valuable hands-on experience in Flutter development</p>
               </li>
        
            </ul>
          </article>

          <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>I crafted interactive, responsive web interfaces using HTML, CSS, and JavaScript, showcasing my frontend expertise.</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>Leveraging ReactJS, I built dynamic and scalable frontend components, enhancing user experience</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>I was involved in backend development using Node.js</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p> I worked with both relational (MySQL) and NoSQL (MongoDB) databases</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>I ensured cross-browser compatibility and optimized web applications for performance, responsiveness, and scalability, providing users with a seamless experience across different devices and platforms</p>
               </li>
               
            </ul>
          </article>


          <article className='service'>
            <div className='service__head'>
              <h3>Freelancing</h3>
            </div>
            <ul className='service__list'>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>Proficient in creating eye-catching posters and company logos using Canva.</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>Spearheaded the creation of IIIT Una's inaugural newsletter, showcasing campus news, events, and achievements with engaging layouts and captivating visuals.</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>Led the design team for Meraki, IIIT Una's technical fest, overseeing the conceptualization and execution of promotional materials.</p>
               </li>
               <li>
                <BiCheck className='service__list-icon'/>
                <p>Designed a logo for Navdiva, a cosmetic company, which was successfully accepted for trademark registration.</p>
               </li>
          
            </ul>
          </article>

      </div>
    </section>
  )
}

export default Services
