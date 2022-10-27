import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect } from "react";

export default function App() {

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
    // slider width
    const navElement = document.querySelector("nav");
    let elementWidth = navElement.offsetWidth
    const sliderElement = document.querySelector(".slider");
    sliderElement.style.setProperty('--full-width', elementWidth);

    // slider movement
    const navItems = document.querySelectorAll('.nav__item')
    navItems.forEach((element , index)=>{
      element.addEventListener('click',()=>{
        sliderElement.style.setProperty('--slider-position', index + 1);
        navItems.forEach((ele )=>{
          ele.classList.remove('active')            
          })
        element.classList.add('active')
      })
    })

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
      <div className="div1">
        <div className="div2">
          <div className="div3">
            <div className="div4"></div>
          </div>
        </div>
      </div>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
      <p>hello from other side hehe</p>
    </>
  );
}
