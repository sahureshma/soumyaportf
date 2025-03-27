import React from 'react'
import './Skills.css';
import HTML from '../../assest/html.png';
import CSS from '../../assest/css.png';
import JS from '../../assest/js_large.png';
import REACT from '../../assest/react.png';
import REDUX from '../../assest/Redux-removebg-preview.png';
import MUI from '../../assest/muilogo.png';
import GITHUB from '../../assest/github_large.png';



export default function Skills() {
  return (
    
    <section id='skills'>
      
      <div className='ski'>
      <h1>Skills</h1>
      </div>
      <div className="container skill__container">
        <div className="skill__frontend">
          <button ><h2>HTML</h2> </button>
          <button><h2>CSS</h2> </button>
          <button><h2>JS</h2> </button>
          <button><h2> Unreal Engine 5.0 and Unity

 </h2> </button>
          <button><h2>Postman and  MongoDB</h2> </button>
          <button><h2>Photoshop and Canva</h2> </button>
          <button><h2>Technical Support and Presenting reports</h2> </button>
          
          <button><h2>Database Maintenance and Quality Analysis</h2> </button>
          
          
        </div>
      </div>
    </section>
  )
}