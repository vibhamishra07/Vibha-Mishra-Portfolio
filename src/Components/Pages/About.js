import React from "react";
import './About.css';

const About =()=>{
    return (
      <>
        <div className="about-box" id="about">
          <div className="about-center">
            <div className="about-title">A Bit About Me!</div>
            <div className="about-content" data-aos="fade-up">
              <p>
                First of all, thank you for visiting and exploring my portfolio.
                I'm Vibha Mishra, pursuing a Bachelor of Technology degree in Computer
                Science. I'm enthusiastic learner and an aspiring web developer. I'm eager to explore new
                things. Furthermore, I'm constantly seeking out new
                opportunities to grow my knowledge, and I'm passionate about
                technology, innovation and big challenging tasks. That makes me
                want to learn more. I'm honest with my work and if I decided to
                complete any work then I will definitely do it before deadline.
                <br/>
                If you have good opportunity that matches my skills than don't hesitate to contact with me or connect with me on 
                <a className="ab-a" rel="noreferrer" href="https://www.linkedin.com/in/vibha-mishra/" target="_blank"> Linkedin</a>.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
export default About;