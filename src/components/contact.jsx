import React , {useState} from 'react'
import Title from './low components/Title.jsx'


export default function contact() {
  function sendEmail() {
  }
  return (
    <div id='contact'>
      <div data-aos="slide-up">
        <Title>
          Contact me
        </Title>
        <div className="contact__text">
          <p>Interested in working together?</p>
          <p>We should queue up a time to chat</p>
          <p>I will buy the coffee.</p>
        </div>
        <div className="contact__content">
          <div className="contact-name_email">
          <div className='contact-name'>
            <input type="text" name="name" id="name" required />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className='contact-email'>
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Your Email</label>
          </div>
          </div>
          <div className='contact-message'>
            <textarea  type="text" name="message" id="message"
              required />
            <label htmlFor="message">Message</label>
          </div>
          <div className='contact-submit'>
            <button className='hoverable' type="submit" name="submit" id="submit" onClick={sendEmail} >Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
