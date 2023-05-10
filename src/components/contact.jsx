import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Title from './low components/Title.jsx'


export default function contact() {

  const form = useRef();
  const succesMessage = useRef();
  const failmessage = useRef();

  let timeOut
  function showMessage({ current }) {
    clearTimeout(timeOut)
    current.classList.add('hidden')
    setTimeout(() => {
      current.classList.remove('hidden')
      timeOut = setTimeout(() => {
        current.classList.add('hidden')
      }, 2000)
    })
  }

  function sendEmail(e) {
    e.preventDefault();
    // check in inputs valid
    if (form.current.name.value && form.current.email.value && form.current.message.value) {
      // send message
      emailjs.sendForm('soulara', 'template_ypz5rsq', form.current, 'B9FGys9dlXIav8myu')
        // in succes
        .then((result) => {
          form.current.reset()
          showMessage(succesMessage)
        })
        // in fail
        .catch(error => {
          console.log(error);
          showMessage(failmessage)
        });
    }
    // invalid inputs
    else {
      console.log("invalid inputs");
      showMessage(failmessage)
    }
  };

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
        <form className="contact__content" ref={form} onSubmit={sendEmail}>
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
            <textarea type="text" name="message" id="message"
              required />
            <label htmlFor="message">Message</label>
          </div>
          <div className='contact-submit'>
            <button className='hoverable' type="submit">Send</button>
          </div>
        </form>
      </div>
      <div ref={succesMessage} className="message hidden succes">
        <div className="inner">
          <img src="/assets/check-circle.svg" height={24} />
          <p>Message Sent</p>
          <div className="loading-bar"></div>
        </div>
      </div>
      <div ref={failmessage} className="message hidden fail">
        <div className="inner">
          <img src="/assets/exclamation.svg" height={24} />
          <p>Message Fail</p>
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  )
}
