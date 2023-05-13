import { useEffect, useRef } from 'react'
import { UilAngleDoubleDown } from '@iconscout/react-unicons';

export default function home() {

  const homeElement = useRef()

  // set home height 
  useEffect(() => {
    const NAVBAR_HEIGHT = 64 // ! hard coded 
    const perfectHeight = window.innerHeight - NAVBAR_HEIGHT
    homeElement.current.style.height = perfectHeight + 'px'
  }, [])

  return (
    <main ref={homeElement} id='home'>
      <div className="hero__main" data-aos="slide-down">
        <h2 className="hero__main-hey">HEY THERE,</h2>
        <h1 className="hero__main-title">I'm Anas Asimi</h1>
        <p className="hero__main-whoami">Self-taught front-end developer with lot of ideas and passion.</p>
        <a className="button-resume hoverable" href='assets/anas-asimi-resume.pdf' download>Download Resume</a>
      </div>
      <div className="home__social" data-aos="slide-down">
        <a className='hoverable' target="_blank" href="https://facebook.com/AnasAssimi10/"><img src="./assets/social icons/facebook.svg" alt="facebook" /></a>
        <a className='hoverable' target="_blank" href="https://www.linkedin.com/in/anas-asimi-8241b3200/"><img src="./assets/social icons/linkedin.svg" alt="linkedin" /></a>
        <a className='hoverable' target="_blank" href="https://github.com/anas-asimi"><img src="./assets/social icons/github.svg" alt="github" /></a>
        <a className='hoverable' href="mailto:anas2020cr7@gmail.com"><img src="./assets/social icons/mail.svg" alt="mail" /></a>
        <a className='hoverable' href="tel:+212697748319"><img src="./assets/social icons/phone.svg" alt="phone" /></a>
      </div>
      <UilAngleDoubleDown className="button-scroll" />
    </main>
  )
}