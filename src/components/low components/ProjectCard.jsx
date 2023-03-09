import React from 'react'
import './ProjectCard.scss'


export default function ProjectCard({ data }) {
  const { image, title, technologies, link } = data

  return (
    <a className='project__card hoverable-2' href={link} target='_blank'>
      <div className="project__image">
        <img src={image} alt="Project image" />
      </div>
      <div className='project__text'>
        <div className='project__text-title'>{title}</div>
        <div className='project__text-technologies'>
          {technologies.map((item, index)=> <span key={index}>{item}</span>)}
          </div>
      </div>
    </a>
  )
}
