import Title from './low components/Title.jsx'
import ProjectCard from './low components/ProjectCard.jsx'
import projectsList from '../utils/projects.js'


export default function projects() {
  return (
    <div id='projects'>
      <div data-aos="slide-up">
        <Title>
          My Projects
        </Title>
        <p className='hint'>Click the images to see live version</p>
        <div className='projects__container'>
          {projectsList.map((data, index) => <ProjectCard key={index} data={data} />)}
        </div>
      </div>
    </div>
  )
}
