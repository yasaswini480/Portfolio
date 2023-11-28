import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tsehxkb', 'template_gb0vxta', form.current, 'b2Bkcr4ypIU9VZZLa')
            .then((result) => {
              console.log(result.text);
              alert("Email sent !");
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div id = 'cont'>
        <a className='contact'>CONTACT ME</a>
        <h4>Please fill out the form to discuss any work opportunities</h4>
        <form className='form' ref = { form } onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name="your_name"/><br></br>
            <input type="text" className='email' placeholder='Your Email' name="your_email"/><br></br>
            <textarea className='message' placeholder='Your Message' name= "message"/><br></br>
            <button value="Send">Submit</button>
        </form>
        
        
    </div>
  )
}

export default Contact