import React, { useState } from "react";
import Styles from "./Hog.module.css";

function Hog({ hog, onHide }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleDetails = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={Styles.hogTile} onClick={toggleDetails}>
            <img src={hog.image} alt={hog.name} className={Styles.hogImage} />
            <h3>{hog.name}</h3>
            {isVisible && (
                <div className={Styles.hogDetails}>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                    <button onClick={(e) => {
                        e.stopPropagation(); 
                        onHide(hog.name);
                    }}>
                        Hide
                    </button>
                </div>
            )}
        </div>
    );
}

export default Hog;
