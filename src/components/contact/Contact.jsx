import "./Contact.css"
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('SendEmail');

    emailjs
      .sendForm('service_u8y7dkt', 'template_obtnegh', form.current, {
        publicKey: 'QYAYucKmwMkmuWRUg',
      })
      .then(
        () => {
          alert("Your Message Recieve Successfully!!")
          console.log('SUCCESS!');
        },
        (error) => {
          alert("Please Try Again");
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            {/* <h4>Email</h4> */}
            <h5>anshulkumar3552@gmail.com</h5>
            <a href="mailto:anshulkumar3552@gmail.com">Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon'/>
            {/* <h4>WhatsApp</h4> */}
            <h5>+91-9456862963</h5>
            <a href="https://wa.me/9456862963" target='_blank'>Connect</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon'/>
            {/* <h4>LinkedIn</h4> */}
            <h5>Anshul Kumar</h5>
            <a href="https://www.linkedin.com/in/anshulkumar2311/" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Mail' required />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' id="btncontact" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
