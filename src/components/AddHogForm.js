import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
	const [formData, setFormData] = useState({
		name: "",
		specialty: "",
		greased: false,
		weight: "",
		"highest medal achieved": "",
		image: ""
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddHog(formData);
		setFormData({
			name: "",
			specialty: "",
			greased: false,
			weight: "",
			"highest medal achieved": "",
			image: ""
		});
	};

	return (
		<form className="ui form" onSubmit={handleSubmit}>
			<div className="field">
				<label>Name</label>
				<input type="text" name="name" value={formData.name} onChange={handleChange} required />
			</div>
			<div className="field">
				<label>Specialty</label>
				<input type="text" name="specialty" value={formData.specialty} onChange={handleChange} />
			</div>
			<div className="field">
				<label>Weight</label>
				<input type="number" name="weight" value={formData.weight} onChange={handleChange} />
			</div>
			<div className="field">
				<label>Highest Medal Achieved</label>
				<input type="text" name="highest medal achieved" value={formData["highest medal achieved"]} onChange={handleChange} />
			</div>
			<div className="field">
				<label>Image URL</label>
				<input type="text" name="image" value={formData.image} onChange={handleChange} />
			</div>
			<div className="field">
				<label>
					Greased:
					<input type="checkbox" name="greased" checked={formData.greased} onChange={handleChange} />
				</label>
			</div>
			<button className="ui button" type="submit">Add Hog</button>
		</form>
	);
}

export default AddHogForm;
