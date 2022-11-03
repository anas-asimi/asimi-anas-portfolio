import React, { useEffect } from "react";

import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

import AOS from 'aos';
import 'aos/dist/aos.css';
import SVGInject from '@iconfu/svg-inject/dist/svg-inject.min.js'

export default function App() {

  useEffect(initialize, [])

  return (
    <React.StrictMode>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

function initialize() {
  
  // set #home height
  const home = document.getElementById('home')
  const height = document.documentElement.clientHeight - 64
  home.style.height = height + 'px'

  
  // SVG injection
  const symbols = document.querySelectorAll('.background-svg')
  SVGInject(symbols)
  .then(()=>{
    // make symbols visible
    const symbols_container = document.querySelector('.symbols__background')
    symbols_container.style.display = 'flex'
  })

  // aos animation
  AOS.init({
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    offset: height / 3 ,
    once: true, // whether animation should happen only once - while scrolling down
  });

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        top: '-64px'
      });
    });
  });

  // cursor circles
  const cursorOuter = document.querySelector('.cursor-outer');
  const cursorInner = document.querySelector('.cursor-inner');
  const hoverables = document.querySelectorAll('.hoverable');

  // Listeners to scale circles in hover
  document.addEventListener('mousemove', onMouseMove);
  for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHoverIn);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorOuter.style.top = cursorInner.style.top = `${y}px`
    cursorOuter.style.left = cursorInner.style.left = `${x}px`
  }

  // Hover an element
  function onMouseHoverIn() {
    cursorOuter.classList.add('cursor-scale')
  }
  function onMouseHoverOut() {
    cursorOuter.classList.remove('cursor-scale')
  }
  // turn off cursor in mobile
  if ('ontouchstart' in window) {
    cursorInner.style.display = 'none';
    cursorOuter.style.display = 'none';
  }

}