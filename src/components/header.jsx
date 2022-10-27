import React from "react";
import * as Unicons from '@iconscout/react-unicons';

function switch_theme() {
  const html_element = document.querySelector("html");
  const lightButton = document.querySelector(".tools__theme-light");
  const darkButton = document.querySelector(".tools__theme-dark");

  lightButton.classList.remove('active')
  darkButton.classList.remove('active')
  
  if(html_element.getAttribute("data-theme") === "light"){
    html_element.setAttribute("data-theme", "dark")
    darkButton.classList.add('active')
  }
  else{
    html_element.setAttribute("data-theme", "light");
    lightButton.classList.add('active')
  }
}

export default function header() {
  return (
    <header>
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
          <li><a href="#" className="nav__item active">Home</a></li>
          <li><a href="#" className="nav__item">About</a></li>
          <li><a href="#" className="nav__item">Skills</a></li>
          <li><a href="#" className="nav__item">Projects</a></li>
          <li><a href="#" className="nav__item">Contact</a></li>
        </ul>
        <div className="slider"></div>
      </nav>
      <div className="tools">
        <button className="tools__theme-light" onClick={switch_theme}><Unicons.UilSun /></button>
        <button className="tools__theme-dark active" onClick={switch_theme}><Unicons.UilMoon /></button>
        <div className="tools__language">button</div>
      </div>
    </header>
  );
}
