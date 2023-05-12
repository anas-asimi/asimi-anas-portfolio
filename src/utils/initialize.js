import AOS from 'aos';
import 'aos/dist/aos.css';
import SVGInject from '@iconfu/svg-inject/dist/svg-inject.min.js'


function initialize() {

    // SVG injection
    const symbols = document.querySelectorAll('.symbols__background .container_child img')
    SVGInject(symbols)
        .then(() => {
            // make symbols visible
            const symbols_container = document.querySelector('#symbols')
            symbols_container.style.display = 'block'
        })
    // aos initialize
    AOS.init({
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        offset: window.innerHeight / 2, // animate after element get in midlle of screen
        once: true, // whether animation should happen only once - while scrolling down
        delay: 0, // no delay
    });
}

export default initialize