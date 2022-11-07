import React from 'react'
import Title from './low components/Title.jsx'


export default function contact() {
  return (
    <div id='contact'>
      <div data-aos="slide-up">
        <Title>
          contact
        </Title>
        <div className="contact__text">
          <p>Interested in working together?</p>
          <p>We should queue up a time to chat</p>
          <p>I will buy the coffee.</p>
        </div>
        <div className="contact__content">
          <div className='contact-name'>
            <input type="text" name="name" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className='contact-email'>
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className='contact-message'>
            <textarea  type="text" name="message" id="message"
              required />
            <label htmlFor="message">Message</label>
          </div>
          <div className='contact-submit'>
            <button type="submit" name="submit" id="submit" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
