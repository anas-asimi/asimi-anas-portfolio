import React, { useEffect, useState, useRef } from "react";
import * as Unicons from '@iconscout/react-unicons';
import { getTheme } from "../utils/theme";


export default function header() {

	let [theme, setTheme] = useState(getTheme());
	const logo = useRef()
	const themeBtn = useRef()
	const slider = useRef()
	const navItems = useRef()

	// switch theme
	function switch_theme() {
		theme == 'light' ? setTheme('dark') : setTheme('light')
	}
	// smooth scroll
	function smoothScroll(e) {
		e.preventDefault();
		// go to target
		document.querySelector(e.target.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
			top: '-64px'
		});
		// change slider position
		slider.current.style.setProperty('--slider-position', e.target.getAttribute('index'));
		// remove active from the rest
		navItems.current.childNodes.forEach(ele => {
			ele.firstChild.classList.remove('active')
		})
		// add active class
		e.target.classList.add('active')
	}
	// changing logo length according to scroll distance
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 200) {
				logo.current.classList.add('scrolled')
			} else {
				logo.current.classList.remove('scrolled')
			}
		})
	}, [])
	// update theme
	useEffect(() => {
		themeBtn.current.className = 'themeToggler hoverable ' + theme;
		document.documentElement.className = theme;
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<header>
			<div>
				<div className="brand">
					<img src="assets/bracket.svg" className="curly-bracket" height={42} />
					<span className="brand-name" ref={logo}>
						A
						<span className="brand-name__sub">nas&nbsp;</span>
						A
						<span className="brand-name__sub">simi</span>
					</span>
					<img src="assets/bracket.svg" className="curly-bracket" height={42} style={{ rotate: '180deg' }} />
				</div>
				<nav className="nav">
					<ul ref={navItems}>
						<li><a onClick={smoothScroll} index={1} href="#home" className="nav__item hoverable active">Home</a></li>
						<li><a onClick={smoothScroll} index={2} href="#about" className="nav__item hoverable">About</a></li>
						<li><a onClick={smoothScroll} index={3} href="#skills" className="nav__item hoverable">Skills</a></li>
						<li><a onClick={smoothScroll} index={4} href="#projects" className="nav__item hoverable">Projects</a></li>
						<li><a onClick={smoothScroll} index={5} href="#contact" className="nav__item hoverable">Contact</a></li>
					</ul>
					<div className="slider" ref={slider}></div>
				</nav>
				<div className="themeToggler hoverable" ref={themeBtn} onClick={switch_theme}>
					<div className="circle">
						<Unicons.UilSun className='light' />
						<Unicons.UilMoon className='dark' />
					</div>
				</div>
			</div>
		</header>
	);
}
