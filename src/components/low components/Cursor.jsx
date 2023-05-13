import { useEffect, useRef } from 'react';
import './Cursor.scss'


function Cursor() {

    const cursor = useRef()
    const cursorOuter = useRef()
    const cursorInner = useRef()

    useEffect(() => {
        // turn off cursor in mobile
        if ('ontouchstart' in window) {
            cursorInner.current.style.display = 'none';
            cursorOuter.current.style.display = 'none';
            return () => { }
        }
        // elements to change cursor in hover
        const hoverables = document.querySelectorAll('.hoverable');
        const hoverables2 = document.querySelectorAll('.hoverable-2');
        // Listeners for cursor circles
        document.addEventListener('mousemove', onMouseMove);
        hoverables.forEach((ele) => {
            ele.addEventListener('mouseenter', onMouseHoverIn);
            ele.addEventListener('mouseleave', backToDefault);
        })
        hoverables2.forEach((ele) => {
            ele.addEventListener('mouseenter', onMouseHoverIn2);
            ele.addEventListener('mouseleave', backToDefault);
        })
        // cursor movement
        function onMouseMove(e) {
            // get position
            let x = e.clientX;
            let y = e.clientY;
            // update position
            cursorOuter.current.style.top = cursorInner.current.style.top = `${y}px`
            cursorOuter.current.style.left = cursorInner.current.style.left = `${x}px`
        }
        // Hover effect 1
        function onMouseHoverIn() {
            cursor.current.classList.add('cursor-scale')
        }
        // Hover effect 2
        function onMouseHoverIn2() {
            cursor.current.classList.add('cursor-alter')
        }
        // back to default style
        function backToDefault() {
            cursor.current.classList.remove('cursor-scale')
            cursor.current.classList.remove('cursor-alter')
        }
    }, [])

    return (
        <span id="cursor" ref={cursor}>
            <span id="cursor-outer" ref={cursorOuter}></span>
            <span id="cursor-inner" ref={cursorInner}></span>
        </span>
    )
}

export default Cursor