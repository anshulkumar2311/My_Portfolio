import React from 'react'
import "./testonomial.css"
import IMG1 from "../../assets/ic_launcher.png"
import IMG2 from "../../assets/logoi.png"
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:IMG1,
    name: "Gauge.ro",
    review:"During my internship at a Gauge.ro, I was fortunate to delve into the world of professional setup work on Zira and Slack, two pivotal platforms for modern team collaboration. Being a Flutter enthusiast, I aimed to leverage my skills in mobile development while exploring various libraries to enhance user experience.",
    link: "https://drive.google.com/file/d/1m21jAfnNy2zVffUpJ4UEnjF0Jxmgd6E5/view?usp=sharing"
  },
  {
    avatar:IMG2,
    name: "JNR Enterprises",
    review:"During my internship at JNR Enterprises, I embarked on an exciting journey to leverage my web development skills in creating a website from scratch. Tasked with transforming ideas into tangible digital experiences, I embraced the opportunity to contribute to the company's online presence while honing my craft.",
    link:"https://drive.google.com/file/d/1jLO9qrzCms9WigsymTAccTl5W3cDdUhN/view?usp=sharing"
  },
]

const Testonomial = () => {
  return (
    <section id='testinomial'>
       <h5>Internship Experience</h5>
       <h2>Learnings</h2>

       <Swiper className="container testinomial__container" modules={[Navigation, Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      pagination={{ clickable: true }} Navigation = "true">
       
        {
          data.map(({avatar,name,review,link},index)=>{
            return <SwiperSlide key={index} className='testinomial'>
            <div className='client__avatar'>
              <img src={avatar} alt="image" />
            </div>
               <a href={link} target='_blank'><h5>{name}</h5></a>
              <small className='client__review'>
               {review}
              </small>
              
          </SwiperSlide>
          })
        }
       </Swiper>
    </section>
  )
}

export default Testonomial
