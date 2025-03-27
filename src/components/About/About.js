import React from "react";
import "./About.css";
import ME from '../../assest/soumya.jpeg';


export default function About() {
  return (
    <section id="about">
      <hr />
      <div className="h33">
      <h3>About Me</h3>
      </div>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="IMG" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <h3>Hello My Name Is Soumya Ranjan Sahu</h3>
       
            <p>
            I am a skilled Computer Science graduate with a Bachelor's degree from DAV Autonomous College and currently pursuing an MCA at OUAT Bhubaneswar. With hands-on experience in leadership and project management, I have honed my technical skills in C, Python, JavaScript, and Data Transcription, UX/UI.

My professional journey includes developing a chatbot during an internship, gaining valuable industry insights through Rubicon training, and currently working as an AI Database Developer at SOURCBOX Solution, Bhubaneswar. This role has deepened my understanding of database optimization and AI-driven solutions.

Fluent in English, Hindi, and Odia, I am a quick learner with a passion for exploring innovative technologies and collaborative projects. Born on 20th May 2002, I am eager to connect with professionals and organizations that share my enthusiasm for technology and innovation.
            </p>
            <br />

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}