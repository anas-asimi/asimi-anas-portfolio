import React from 'react'
import './ProjectCard.scss'


export default function ProjectCard({ data }) {
  const {link, title , technologies} = data

  return (
    <div className='project__card hoverable-2'>
      <div className="project__image">
        <img src={link} alt="Project image" />
      </div>
      <div className='project__text'>
        <div className='project__text-title'>{title}</div>
        <div className='project__text-technologies'>
          {technologies.map((item, index)=> <span key={index}>{item}</span>)}
          </div>
      </div>
    </div>
  )
}
