import React from 'react'
import './ProjectCard.scss'


export default function ProjectCard({data}) {

  return (
    <div className='project__card'>
      <div className="project__image">image</div>
      <div className='project__text'>
        <div>title</div>
        <div>description</div>
        <div>technologies</div>
      </div>
    </div>
  )
}
