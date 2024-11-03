import React from "react";

function FilterSort({ setFilter, setSortBy }) {
	return (
		<div className="filter-sort">
			<div>
				<label>Filter by Greased:</label>
				<select onChange={(e) => setFilter(e.target.value)}>
					<option value="">All</option>
					<option value="greased">Greased</option>
					<option value="non-greased">Not Greased</option>
				</select>
			</div>
			<div>
				<label>Sort by:</label>
				<select onChange={(e) => setSortBy(e.target.value)}>
					<option value="">None</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>
		</div>
	);
}

export default FilterSort;
