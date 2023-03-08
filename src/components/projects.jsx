import React from 'react'
import Title from './low components/Title.jsx'
import ProjectCard from './low components/ProjectCard.jsx'


export default function projects() {
  const projectsData = [
    {
      image: "/assets/projects preview/Portfolio.png",
      title: 'Personal Portfolio',
      technologies: ['Sass', 'ReactJs', 'Vite'],
      link: '#'
    },
    {
      image: "/assets/projects preview/Gr-tools.jpg",
      title: 'Genie Rural tools',
      technologies: ['ReactRouter', 'ReactJs', 'Vite'],
      link: 'https://gr-tools.netlify.app/'
    },
    {
      image: "/assets/projects preview/Soulara.png",
      title: 'Soulara',
      technologies: ['Figma'],
      link: '#'
    },
    {
      image: "/assets/projects preview/Template.png",
      title: 'template',
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
          {projectsData.map((data, index) => <ProjectCard key={index} data={data} />)}
        </div>
        <p>Click to see live version</p>
      </div>
    </div>
  )
}
