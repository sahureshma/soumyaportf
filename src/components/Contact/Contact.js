import React from 'react'
import './Contact.css';
import { AiOutlineMail,AiOutlineLinkedin,AiOutlineWhatsApp } from "react-icons/ai";


export default function Contact() {
 
  return (
    <section id='contact'>
      <div className='con'>
      <h3>Get In Touch</h3>
      <h1>Contact Me</h1>
      </div>
<div className="container contact__container">
          <div className="contact__options">
    <article className='contact__option'>
      <AiOutlineMail className='cantact__icon'/>
      <h4>Email</h4>
<h5>soumyaranjansahu910@gmail.com</h5>
<a href="mailto:ssshureshma17299@gmail.com">Send Message</a>

    </article>
    <article className='contact__option'>
      <AiOutlineLinkedin className='cantact__icon'/>
      <h4>Linkedin</h4>
      <h5>Soumya</h5>
      <a href="https://www.linkedin.com/in/soumya-ranjan-sahu-016973232" target="blank" >Send  message</a>
    </article>
    <article className='contact__option'>
    <AiOutlineWhatsApp className='cantact__icon'/>

      <h4>WhatsApp number:9556308998</h4>
      
    </article>
  </div>
  <form action="https://formspree.io/f/mlekqzpk" method="POST">
<input type='text' name='name' placeholder='Name' required/>
<input type='email' name='email' placeholder='Email' required/>
<textarea name='message' rows='7' placeholder='Your message' required></textarea>
<button type='submit' className='btn btn-primary'>submit</button>
  </form>
</div>
    </section>
  )
}