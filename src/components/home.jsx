import React from 'react'
import * as Unicons from '@iconscout/react-unicons';

export default function home() {
  return (
    <main id='home'>
      <div className="hero__main">
        <h2 className="hero__main-hey">HEY THERE,</h2>
        <h1 className="hero__main-title">I'm Anas Asimi.</h1>
        <p className="hero__main-whomi">Self-taught front-end developer with lot of ideas and passion.</p>
        <button className="button-resume" onClick={() => { alert('will be supported soon.') }}>Download Resume</button>
        <Unicons.UilAngleDoubleDown className="button-scroll" />
      </div>
      <div className="home__social">
        <a href="https://facebook.com/AnasAssimi10/"><img src="src/assets/icons/facebook.svg" alt="facebook" /></a>
        <a href="https://www.linkedin.com/in/anas-asimi-8241b3200/"><img src="src/assets/icons/linkedin.svg" alt="linkedin" /></a>
        <a href="https://github.com/anas-asimi"><img src="src/assets/icons/github.svg" alt="github" /></a>
        <a href="mailto:anas2020cr7@gmail.com"><img src="src/assets/icons/mail.svg" alt="mail" /></a>
        <a href="tel:+212697748319"><img src="src/assets/icons/phone.svg" alt="phone" /></a>
      </div>
    </main>
  )
}
