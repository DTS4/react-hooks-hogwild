import React from "react";
import Hog from "../Hog/Hog";
import { Grid } from 'semantic-ui-react';

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
		<Grid container>
			{visibleHogs.map((hog) => (
				<Grid.Column key={hog.name} width={4}>
					<Hog hog={hog} onHide={onHideHog} />
				</Grid.Column>
			))}
		</Grid>
	);
}

export default HogList;
