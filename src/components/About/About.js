import React from "react";
import "./About.css";
import ME from '../../assest/soumya.jpeg';

export default function About() {
  return (
    <section id="about">
      <div className="about__header">
        <h3>About Me</h3>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Soumya Ranjan Sahu" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <h3>Hello! I'm <span className="highlight">Soumya Ranjan Sahu</span></h3>
            <p>
              I am a skilled Computer Science graduate with a Bachelor's degree from DAV Autonomous College and currently pursuing an MCA at OUAT Bhubaneswar. 
              With hands-on experience in leadership and project management, I have honed my technical skills in C, Python, JavaScript, Data Transcription, and UX/UI.
            </p>
            <p>
              Currently working as an <strong>AI Database Developer</strong> at SOURCBOX Solution, Bhubaneswar, I focus on database optimization and AI-driven solutions. 
              Fluent in English, Hindi, and Odia, I thrive in collaborative and innovative tech environments.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
