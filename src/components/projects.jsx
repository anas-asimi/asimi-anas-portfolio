import React from 'react'
import Title from './low components/Title.jsx'
import ProjectCard from './low components/ProjectCard.jsx'


export default function projects() {
  return (
    <div id='projects'>
      <div data-aos="slide-up">
      <Title>
        projects
      </Title>
      <div className='projects__container'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
      </div>
    </div>
  )
}
