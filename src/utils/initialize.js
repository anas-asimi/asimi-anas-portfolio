import AOS from 'aos';
import 'aos/dist/aos.css';


function initialize() {
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