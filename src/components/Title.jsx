import React from 'react'

export default function Title({children}) {
  return (
    <div className='main__title'>
      <h2>{children}</h2>
    <div className="main__title-left"></div>
    <div className="main__title-middle"></div>
    <div className="main__title-right"></div>
    </div>
  )
}
