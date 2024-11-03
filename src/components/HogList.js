import React from "react";
import Hog from "./Hog";

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
		<div className="ui grid container">
			{visibleHogs.map((hog) => (
				<div key={hog.name} className="ui eight wide column">
					<Hog hog={hog} onHide={onHideHog} />
				</div>
			))}
		</div>
	);
}

export default HogList;
