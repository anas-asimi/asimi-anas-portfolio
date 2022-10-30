import React from 'react'
import './Title.scss'

export default function Title({children}) {
  return (
    <div className='main__title' data-aos="slide-up">
      <h2>{children}</h2>
    <div className="main__title-left"></div>
    <div className="main__title-middle"></div>
    <div className="main__title-right"></div>
    </div>
  )
}
