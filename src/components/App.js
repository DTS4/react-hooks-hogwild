import React, { useState } from "react";
import Nav from "./Nav";
import Hogs from "../porkers_data";
import HogList from "./HogList/HogList";
import FilterSort from "./FilterSort/FilterSort";
import AddHogForm from "./AddHogForm/AddHogForm";

function App() {
	const [hogsData, setHogsData] = useState(Hogs);
	const [filter, setFilter] = useState("");
	const [sortBy, setSortBy] = useState("");
	const [hiddenHogs, setHiddenHogs] = useState([]);

	const addNewHog = (newHog) => {
		setHogsData([...hogsData, newHog]);
	};

	const handleHideHog = (hogName) => {
		setHiddenHogs([...hiddenHogs, hogName]);
	};

	return (
		<div className="App">
			<Nav />
			<AddHogForm onAddHog={addNewHog} />
			<FilterSort setFilter={setFilter} setSortBy={setSortBy} />
			<HogList
				hogs={hogsData}
				filter={filter}
				sortBy={sortBy}
				hiddenHogs={hiddenHogs}
				onHideHog={handleHideHog}
			/>
		</div>
	);
}

export default App;
