import React from 'react'
import Title from './low components/Title.jsx'
import ProjectCard from './low components/ProjectCard.jsx'


export default function projects() {
  const projectsData = [
    {
      image: "/assets/projects/project-1.png",
      title: 'Personal Portfolio',
      technologies: ['Sass', 'ReactJs', 'Vite'],
      link : 'https://asimianas.netlify.app/'
    },
    {
      image: "/assets/projects/project-2.png",
      title: 'Genie Rural tools',
      technologies: ['ReactRouter', 'ReactJs', 'Vite'],
      link: 'https://gr-tools.netlify.app/'
    },
    {
      image: "/assets/projects/project-3.png",
      title: 'Responsive Website',
      technologies: ['css', 'html', 'Js'],
      link: 'https://anas-asimi.github.io/Front-End_Project/'
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
        <p>Click to see live version</p>
      </div>
    </div>
  )
}
