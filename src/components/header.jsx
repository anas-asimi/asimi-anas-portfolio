import React, { useEffect } from "react";
import * as Unicons from '@iconscout/react-unicons';

function switch_theme() {
  const lightButton = document.querySelector(".tools__theme-light");
  const darkButton = document.querySelector(".tools__theme-dark");

  lightButton.classList.toggle('theme-active')
  darkButton.classList.toggle('theme-active')
  document.body.classList.add('faded')
  document.documentElement.toggleAttribute('dark')
  setTimeout(() => {
    document.body.classList.remove('faded')
  }, 100);
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
            <li><a onClick={scrollToTop} className="nav__item nav__item-active hoverable">Home</a></li>
            <li><a href="#about" className="nav__item hoverable">About</a></li>
            <li><a href="#skills" className="nav__item hoverable">Skills</a></li>
            <li><a href="#projects" className="nav__item hoverable">Projects</a></li>
            <li><a href="#contact" className="nav__item hoverable">Contact</a></li>
          </ul>
          <div className="slider"></div>
        </nav>
        <div className="tools">
          <button className="tools__theme-light hoverable" onClick={switch_theme}><Unicons.UilSun /></button>
          <button className="tools__theme-dark hoverable theme-active" onClick={switch_theme}><Unicons.UilMoon /></button>
        </div>

      </div>
    </header>
  );
}
