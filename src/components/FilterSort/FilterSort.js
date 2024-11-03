import React from "react";
import { Dropdown } from 'semantic-ui-react';

function FilterSort({ setFilter, setSortBy }) {
	const filterOptions = [
		{ key: 'all', text: 'All', value: '' },
		{ key: 'greased', text: 'Greased', value: 'greased' },
		{ key: 'non-greased', text: 'Not Greased', value: 'non-greased' }
	];

	const sortOptions = [
		{ key: 'none', text: 'None', value: '' },
		{ key: 'name', text: 'Name', value: 'name' },
		{ key: 'weight', text: 'Weight', value: 'weight' }
	];

	return (
		<div className="filter-sort">
			<div>
				<label>Filter by Greased:</label>
				<Dropdown
					placeholder='Select Filter'
					selection
					options={filterOptions}
					onChange={(e, { value }) => setFilter(value)}
				/>
			</div>
			<div>
				<label>Sort by:</label>
				<Dropdown
					placeholder='Select Sort'
					selection
					options={sortOptions}
					onChange={(e, { value }) => setSortBy(value)}
				/>
			</div>
		</div>
	);
}

export default FilterSort;
