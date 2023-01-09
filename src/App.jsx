import { useEffect } from "react";
// components
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
// settings
import AOS from 'aos';
import 'aos/dist/aos.css';
import SVGInject from '@iconfu/svg-inject/dist/svg-inject.min.js'

export default function App() {

  useEffect(initialize, [])

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

function initialize() {
  
  // set #home height 
  const homeElement = document.getElementById('home')
  const NAVBAR_HEIGHT = 64
  const perfectHeight = window.innerHeight - NAVBAR_HEIGHT
  homeElement.style.height = perfectHeight + 'px'

  
  // SVG injection
  const symbols = document.querySelectorAll('.symbols__background .container_child img')
  SVGInject(symbols)
  .then(()=>{
    // make symbols visible
    const symbols_container = document.querySelector('#symbols')
    symbols_container.style.display = 'block'
  })

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
  const cursor = document.querySelector('#cursor');
  const hoverables = document.querySelectorAll('.hoverable');
  const hoverables2 = document.querySelectorAll('.hoverable-2');

  // Listeners for circles
  document.addEventListener('mousemove', onMouseMove);
  hoverables.forEach((ele) => {
    ele.addEventListener('mouseenter', onMouseHoverIn);
    ele.addEventListener('mouseleave', onMouseHoverOut);
  })
  hoverables2.forEach((ele) => {
    ele.addEventListener('mouseenter', onMouseHoverIn2);
    ele.addEventListener('mouseleave', onMouseHoverOut);
  })

  // the cursor movement
  function onMouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorOuter.style.top = cursorInner.style.top = `${y}px`
    cursorOuter.style.left = cursorInner.style.left = `${x}px`
  }

  // Hover in an element effect 1
  function onMouseHoverIn() {
    cursor.classList.add('cursor-scale')
  }
  // Hover in an element effect 2
  function onMouseHoverIn2() {
    cursor.classList.add('cursor-alter')
  }
  // Hover out an element (back to normal state)
  function onMouseHoverOut() {
    cursor.classList.remove('cursor-scale')
    cursor.classList.remove('cursor-alter')
  }
  // turn off cursor in mobile
  if ('ontouchstart' in window) {
    cursorInner.style.display = 'none';
    cursorOuter.style.display = 'none';
  }
  // aos initialize
  AOS.init({
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    offset: window.innerHeight / 2 , // animate after element get in midlle of screen
    once: true, // whether animation should happen only once - while scrolling down
    delay:0, // no delay
  });
}