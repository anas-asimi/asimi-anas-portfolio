import React from 'react'
import * as Unicons from '@iconscout/react-unicons';


export default function home() {
  return (
    <main id='home'>
      <div className="hero__main">
        <h2 className="hero__main-hey">HEY THERE,</h2>
        <h1 className="hero__main-title">I'm Anas Asimi.</h1>
        <p className="hero__main-whomi">Self-taught front-end developer with lot of ideas and passion.</p>
        <button className="button-resume">Download Resume</button>
        <Unicons.UilAngleDoubleDown className="button-scroll"/>
      </div>
      <div className="social">facebook</div>
    </main>
  )
}
