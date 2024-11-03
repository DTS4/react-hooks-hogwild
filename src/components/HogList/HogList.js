import React from "react";
import Hog from "../Hog/Hog";
import Styles from "./HogList.module.css";  

function HogList({ hogs, filter, sortBy, hiddenHogs, onHideHog }) {
    const visibleHogs = hogs
        .filter((hog) => !hiddenHogs.includes(hog.name))
        .filter((hog) => (filter === "greased" ? hog.greased : true))
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "weight") return a.weight - b.weight;
            return 0;
        });

    return (
        <div className={Styles.hogListContainer}>  
            <ul className={Styles.hogList}>  
                {visibleHogs.map((hog) => (
                    <li key={hog.name} className={Styles.hogListItem}>  
                        <Hog hog={hog} onHide={onHideHog} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HogList;
