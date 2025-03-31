import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section id='skills'>
      <div className='skills-container'>
        <h1 className='skills-title'>My Skills</h1>
        <div className="skill__list">
          {[
            "HTML", "CSS", "JavaScript", "ReactJS", "Redux", 
            "Unreal Engine 5.0", "Unity", "Postman & MongoDB", 
            "Photoshop", "Canva", "Technical Support", 
            "Presenting Reports", "Database Maintenance", "Quality Analysis"
          ].map((skill, index) => (
            <button key={index} className="skill-btn">
              <h2>{skill}</h2>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
