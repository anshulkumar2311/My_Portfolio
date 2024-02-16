import React from 'react'
import "./testonomial.css"
import IMG1 from "../../assets/avatar1.jpg"
import IMG2 from "../../assets/avatar2.jpg"
import IMG3 from "../../assets/avatar3.jpg"
import IMG4 from "../../assets/avatar4.jpg"
import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:IMG1,
    name: "Gauge.ro",
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum natus quia, fugit sequi, quam iure, possimus excepturi aut soluta repudiandae laboriosam facilis sit."
  },
  {
    avatar:IMG2,
    name: "JNR Enterprises",
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum natus quia, fugit sequi, quam iure, possimus excepturi aut soluta repudiandae laboriosam facilis sit."
  },
  // {
  //   avatar:IMG3,
  //   name: "Gauge.ro",
  //   review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum natus quia, fugit sequi, quam iure, possimus excepturi aut soluta repudiandae laboriosam facilis sit."
  // },
  // {
  //   avatar:IMG4,
  //   name: "Gauge.ro",
  //   review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum natus quia, fugit sequi, quam iure, possimus excepturi aut soluta repudiandae laboriosam facilis sit."
  // }
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
          data.map(({avatar,name,review},index)=>{
            return <SwiperSlide key={index} className='testinomial'>
            <div className='client__avatar'>
              <img src={avatar} alt="image" />
            </div>
              <h5>{name}</h5>
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
