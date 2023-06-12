import { useEffect } from "react";
// components
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Cursor from './components/low components/Cursor'
import ZelligeDecoration from "./components/low components/ZelligeDecoration";
// styles
import './utils/normalize.css'
import 'aos/dist/aos.css';
import './index.scss'
// initial the configuration
import initialize from "./utils/initialize.js";


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
      <Cursor />
      <ZelligeDecoration />
    </>
  );
}