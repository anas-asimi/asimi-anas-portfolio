import { ReactComponent as Triangle } from "./background.svg";
import './ZelligeDecoration.scss'

function ZelligeDecoration() {
    return (
        <div className="zellige-container">
            {[...Array(10)].map((_, i) =>
                <div key={i} className="container_child">
                    <Triangle />
                </div>
            )}
        </div>
    )
}

export default ZelligeDecoration