import React from 'react'
import Title from './low components/Title.jsx'
import Skill_bar from './low components/skill_bar.jsx'

export default function skills() {

  return (
    <div id='skills'>
      <div data-aos="slide-up">
        <Title>
          skills
        </Title>
        <div className="skills__text">
          <p>For the last year, I have learn and use the most modern adn popular technologies to create high quality websites in the shortest time possible.</p>
        </div>
        <div className="skills__content">
          <div className="skills__container" data-aos="slide-right">
            <h2 className="title">My Programming Skills</h2>
            <div className="content">
              <Skill_bar name='HTML + CSS' progress={80} key={1} order={1} />
              <Skill_bar name='Sass' progress={70} key={2} order={2} />
              <Skill_bar name='JavaScript' progress={70} key={3} order={3} />
              <Skill_bar name='ReactJs' progress={60} key={4} order={4} />
            </div>
          </div>
          <div className="knowledge__container" data-aos="slide-left">
            <h2 className="title">Knowledge</h2>
            <div className="content">
              <div className="item1">
                <img src="\assets\icons\bootstrap.svg" alt="icon" />
              </div>
              <div className="item2">
                <img src="\assets\icons\dart.svg" alt="icon" />
              </div>
              <div className="item3">
                <img src="\assets\icons\javascript.svg" alt="icon" />
              </div>
              <div className="item4">
                <img src="\assets\icons\nodejs.svg" alt="icon" />
              </div>
              <div className="item5">
                <img src="\assets\icons\npm.svg" alt="icon" />
              </div>
              <div className="item6">
                <img src="\assets\icons\python.svg" alt="icon" />
              </div>
              <div className="item7">
                <img src="\assets\icons\sass.svg" alt="icon" />
              </div>
              <div className="item8">
                <img src="\assets\icons\Vitejs.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}