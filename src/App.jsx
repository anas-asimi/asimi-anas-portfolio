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
    // aos animation
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
    AOS.init();
    // set #home height
    const home = document.getElementById('home')
    const height = document.documentElement.clientHeight - 64
    home.style.height = height + 4 + 'px'
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
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }
    // Move the cursor
    function onMouseMove(e) {
      cursorOuter.style.translate = `${e.pageX}px ${e.pageY}px`
      cursorInner.style.translate = `${e.pageX}px ${e.pageY}px`
    }
    // Hover an element
    function onMouseHover() {
      cursorOuter.classList.add('cursor-scale')
    }
    function onMouseHoverOut() {
      cursorOuter.classList.remove('cursor-scale')
    }
    // turn off cursor in mobile
    if ('ontouchstart' in window){
      cursorInner.style.display = 'none';
      cursorOuter.style.display = 'none';
    }
  }, [])

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