import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
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

window.onload = () => {
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
  // Listeners
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

}
