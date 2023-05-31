import { useEffect } from "react";
import { ReactComponent as Triangle } from "./background.svg";
import './ZelligeDecoration.scss'
import { useRef } from "react";

function ZelligeDecoration() {
    let zellige = useRef()
    // changing according to scroll distance
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            zellige.current.style.translate = `0 ${window.scrollY / 2}px`
        })
    }, [])
    return (
        <div className="zellige-container" ref={zellige}>
            {[...Array(10)].map((_, i) =>
                <div key={i} className="container_child">
                    <Triangle />
                </div>
            )}
        </div>
    )
}

export default ZelligeDecoration