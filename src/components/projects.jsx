import React from 'react'
import Title from './low components/Title.jsx'
import ProjectCard from './low components/ProjectCard.jsx'
import { projectsData } from '../projects.js'


export default function projects() {
  return (
    <div id='projects'>
      <div data-aos="slide-up">
        <Title>
          My Projects
        </Title>
        <div className='projects__container'>
          {projectsData.map((data, index) => <ProjectCard key={index} data={data} />)}
        </div>
        <p className='hint'>Click image to see live version</p>
      </div>
    </div>
  )
}
