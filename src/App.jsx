import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    // things to run after app load
    initialTheApp()
  }, [])

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function initialTheApp() {
  // aos animation initialize
  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    duration: 500, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
  });

  // set #home height (fix the 100vh in mobiles)
  const home = document.getElementById('home')
  const height = document.documentElement.clientHeight - 64
  home.style.height = height + 'px'


  // smooth scroll to section
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  // Customization the cursor
  const cursorOuter = document.querySelector('.cursor-outer');
  const cursorInner = document.querySelector('.cursor-inner');
  const hoverables = document.querySelectorAll('.hoverable');

  window.addEventListener('mousemove', onMouseMove);
  for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

  // the cursor movement
  function onMouseMove(e) {
    cursorOuter.style.top = `${e.clientY}px`
    cursorOuter.style.left = `${e.clientX}px`
    cursorInner.style.top = `${e.clientY}px`
    cursorInner.style.left = `${e.clientX}px`
  }
  
  // Hover an element
  function onMouseHover() {
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