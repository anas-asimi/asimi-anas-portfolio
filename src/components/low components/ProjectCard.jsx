import React from 'react'
import './ProjectCard.scss'


export default function ProjectCard({ data }) {

  return (
    <div className='project__card hoverable-2'>
      <div className="project__image"></div>
      <div className='project__text'>
        <div className='project__text-title'>Web Site</div>
        <div className='project__text-technologies'>
          <span>ReactJs</span>
          <span>ExpressJs</span>
          <span>Sass</span>
          </div>
      </div>
    </div>
  )
}
