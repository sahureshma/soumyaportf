import React from 'react';
import './Contact.css';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact() {
  return (
    <section id='contact'>
      <div className='contact-header'>
        <h3>Let's Connect</h3>
        <h1>Contact Me</h1>
        <p>Have a question or want to collaborate? Reach out to me!</p>
      </div>
      
      <div className="container contact__container">
        
        {/* 🔹 Contact Methods */}
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>soumyaranjansahu910@gmail.com</h5>
            <a href="mailto:soumyaranjansahu910@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a Mail
            </a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__icon' />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/soumya-ranjan-sahu-016973232" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__icon' />
            <h4>WhatsApp</h4>
            <h5>+91 9556308998</h5>
            <a href="https://wa.me/919556308998" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </article>
        </div>

        {/* 🔹 Contact Form */}
        <form action="https://formspree.io/f/mlekqzpk" method="POST">
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='5' placeholder='Write your message here...' required></textarea>
          <button type='submit' className='btn btn-primary glow-btn'>Send Message</button>
        </form>

      </div>
    </section>
  );
}
