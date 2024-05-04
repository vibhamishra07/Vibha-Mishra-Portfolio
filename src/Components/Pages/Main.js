import React from 'react';
import './Main.css';


export default function Main() {

  return (
    <>
      <div className="container-main" id='main'>
        <div className="intro-content">
          <h1 className="name-box">Hii!</h1>
          <h1 className="name-box" >
            I'm<span> Vibha Mishra</span>
          </h1>
          <div className="learn-box">
            <div className="learn">
              <div className="learning">Web Developer</div>
              <div className="learning">MERN Developer</div>
              <div className="learning">DSA Learner</div>
              <div className="learning">CP Enthusiast</div>
            </div>
          </div>
          <div className='thought'>I believe in keep progressive and creative with positivity!</div>
          <div className='btn-box'>
            <button className="resume-btn btn" ><a rel="noreferrer" href='#contact'>Get In Touch</a></button>
            <button className="resume-btn btn" ><a rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1isxjkVII-TUrgFkVyOc1p_l4zm1HfC8N/view?usp=sharing'>Resume</a></button>
            <button className="linkdin-btn btn" ><a rel="noreferrer" href="https://www.linkedin.com/in/vibha-mishra/" target="_blank">Linkedin</a></button>
          </div>
        </div>
      </div>
    </>
  );
}
