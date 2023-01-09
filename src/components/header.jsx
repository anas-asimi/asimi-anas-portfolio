import React, { useEffect } from "react";
import * as Unicons from '@iconscout/react-unicons';

function switch_theme() {
  const themeBtn = document.querySelector(".theme");
  themeBtn.classList.toggle('dark')
  document.documentElement.toggleAttribute('dark')
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function header() {
  useEffect(() => {
    // scroll effect
    const brandName = document.querySelector(".brand-name");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        brandName.classList.add('scrolled')
      } else {
        brandName.classList.remove('scrolled')
      }
    });

    // slider movement
    const sliderElement = document.querySelector(".slider");
    const navItems = document.querySelectorAll('.nav__item')
    navItems.forEach((element, index) => {
      element.addEventListener('click', () => {
        sliderElement.style.setProperty('--slider-position', index + 1);
        navItems.forEach((ele) => {
          ele.classList.remove('nav__item-active')
        })
        element.classList.add('nav__item-active')
      })
    })
  }, [])
  return (
    <header>
      <div>
        <div className="brand">
          <span className="curly-bracket">{"{"}</span>
          <span className="brand-name">
            A<span className="brand-name__sub">nas&nbsp;</span>A
            <span className="brand-name__sub">simi</span>
          </span>
          <span className="curly-bracket">{"}"}</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#" onClick={scrollToTop} className="nav__item nav__item-active hoverable">Home</a></li>
            <li><a href="#about" className="nav__item hoverable">About</a></li>
            <li><a href="#skills" className="nav__item hoverable">Skills</a></li>
            <li><a href="#projects" className="nav__item hoverable">Projects</a></li>
            <li><a href="#contact" className="nav__item hoverable">Contact</a></li>
          </ul>
          <div className="slider"></div>
        </nav>
        <div className="theme" onClick={switch_theme}>
          <div className="circle">
            <Unicons.UilSun className='light'/>
            <Unicons.UilMoon className='dark' />
          </div>
        </div>
      </div>
    </header>
  );
}
