import React from 'react'
import Title from './low components/Title.jsx'
import ProjectCard from './low components/ProjectCard.jsx'


export default function projects() {
  const projectsData = [
    {
      link: "/assets/projects/project-1.jpg",
      title: 'Personal Portfolio',
      technologies: ['Sass', 'ReactJs', 'Vite']
    },
    {
      link: "/assets/projects/project-1.jpg",
      title: 'Personal Portfolio',
      technologies: ['Sass', 'ReactJs', 'Vite']
    },
    {
      link: "/assets/projects/project-1.jpg",
      title: 'Personal Portfolio',
      technologies: ['Sass', 'ReactJs', 'Vite']
    }
  ]
  return (
    <div id='projects'>
      <div data-aos="slide-up">
        <Title>
          My Projects
        </Title>
        <div className='projects__container'>
          {projectsData.map((data, index)=><ProjectCard key={index} data={data}/>)}
        </div>
      </div>
    </div>
  )
}
