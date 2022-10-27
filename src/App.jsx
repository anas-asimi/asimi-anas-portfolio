import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect } from "react";

export default function App() {

  function switch_theme() {
    const html_ele = document.querySelector("html");
    html_ele.getAttribute("data-theme") === "light"
      ? html_ele.setAttribute("data-theme", "dark")
      : html_ele.setAttribute("data-theme", "light");
  }

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
      <button onClick={switch_theme}>switch</button>
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
