import React, {useRef} from "react";
import './Contact.css';
import emailjs from "@emailjs/browser";
// import emailjs from 'emailjs-com';

const Contact =()=>{
  const form = useRef();
    const submitform =(e)=>{
      e.preventDefault();

      emailjs.sendForm('service_pc1c9k3', 'template_69pr45g', form.current, 'OeWXlvTasEGcXVxiz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
      <>
        <div className="contact-box" id="contact">
          <div className="contact-title">Get In Touch</div>
          <p className="que">Got any questions? Contact me!</p>
          <div className="form-container">
            <div className="form-box">
              <form  ref={form} onSubmit={submitform}>
                <div className="name-box">
                  <input
                    type="text"
                    name="fName"
                    id="fname"
                    autoComplete="off"
                    placeholder="First Name"
                    required
                    className="no-outline"
                  ></input>
                  <input
                    type="text"
                    name="sName"
                    id="sname"
                    autoComplete="off"
                    placeholder="Second Name"
                    required
                    className="no-outline"
                  ></input>
                </div>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  required
                  className="no-outline"
                ></input>
                <textarea
                  name="message"
                  placeholder="Text Here!"
                  id="message"
                  required
                  autoComplete="off"
                  className="no-outline"
                  maxLength="5000"
                ></textarea>
                <button type="submit" id="sub-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}
export default Contact;