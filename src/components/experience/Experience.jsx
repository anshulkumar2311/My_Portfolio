import React,{useEffect} from 'react'
import "./Experience.css"
import { BsPatchCheckFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id='experience' data-aos="fade-right">
      <h5 id='Skills'>What Skills I Have</h5>
      <h2>My Expertise</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
             <h3>Development Skills</h3>
             <div className="experience__content">
              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>CSS</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Javascript</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>ReactJs</h4>
               <small className='text-light'>Intermediate</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Node.Js</h4>
               <small className='text-light'>Intermediate</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>MongoDb</h4>
               <small className='text-light'>Intermediate</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Flutter</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Firebase</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>
             </div>
        </div>
        <div className="experience_backend">
        <h3>Academic Courses</h3>
             <div className="experience__content">
             <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>C/C++</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>
              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>DSA</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>DBMS</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>OOPS</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>

              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Operating System</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article>
{/* 
              <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>OOPS</h4>
               <small className='text-light'>Experienced</small>
               </div>
              </article> */}
             </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
