import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My Recent work </h5>
       <h2>Projects</h2>

       <div className="container portfolio__container">
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
            <img src={IMG1} alt="Image" />
           </div>
            <h3>Book_Space : Organisation for donate books</h3>
            <div className='portfolio__item__cta'>
            <a href="https://github.com/anshulkumar2311/Book_Space" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/anshulkumar2311/Book_Space" className='btn btn-primary' target='_blank'>LiveDemo</a>
            </div>
        </article>
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
            <img src={IMG2} alt="Image" />
           </div>
            <h3>AI RADIO : Voice Assistant Support</h3>
            <div className='portfolio__item__cta'>
            <a href="https://github.com/anshulkumar2311/MyRadioApp/tree/master" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/anshulkumar2311/MyRadioApp/tree/master" className='btn btn-primary' target='_blank'>LiveDemo</a>
            </div>
           
        </article>
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
            <img src={IMG3} alt="Image" />
           </div>
            <h3>IsToHelp : Student Help Center</h3>
            <div className='portfolio__item__cta'>
            <a href="https://github.com/anshulkumar2311" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/anshulkumar2311" className='btn btn-primary' target='_blank'>LiveDemo</a>
            </div>
           
        </article>
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
            <img src={IMG4} alt="Image" />
           </div>
            <h3>BlockTrack : Shipment Sytem</h3>
            <div className='portfolio__item__cta'>
            <a href="https://github.com/anshulkumar2311/BlockTrack/tree/main" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/anshulkumar2311/BlockTrack/tree/main" className='btn btn-primary' target='_blank'>LiveDemo</a>
            </div>
           
        </article>
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
            <img src={IMG5} alt="Image" />
           </div>
            <h3>Covid19 : +ve case counter</h3>
            <div className='portfolio__item__cta'>
            <a href="https://github.com/anshulkumar2311/Covid19/tree/main" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/anshulkumar2311/Covid19/tree/main" className='btn btn-primary' target='_blank'>LiveDemo</a>
            </div>
           
        </article>
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
            <img src={IMG6} alt="Image" />
           </div>
            <h3>Chatting App</h3>
            <div className='portfolio__item__cta'>
            <a href="https://github.com/anshulkumar2311/chatting_app/tree/main" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/anshulkumar2311/chatting_app/tree/main" className='btn btn-primary' target='_blank'>LiveDemo</a>
            </div>
           
        </article>
       </div>
    </section>
  )
}

export default Portfolio
