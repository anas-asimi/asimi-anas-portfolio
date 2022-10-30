import React from 'react'
import './skill_bar.scss'


export default function Skill_bar(props) {

  return (
    <div className='skill_bar'>
      <div className="text">
        <span className='text-main'>{props.name}</span>
        <span className='text-number'>{`${props.progress}%`}</span>
      </div>
      <div className="bar">
        <div className="bar-active" style={{ "--progress": `${props.progress}` , "--order": `${props.order}` }}></div>
        <div className="bar-inactive"></div>
      </div>
    </div>
  )
}
