import React, { useState } from "react";

function Hog({ hog, onHide }) {
	const [showDetails, setShowDetails] = useState(false);

	const handleToggleDetails = () => {
		setShowDetails(!showDetails);
	};

	return (
		<div className="ui card pigTile minPigTile" onClick={handleToggleDetails}>
			<div className="image">
				<img src={hog.image} alt={hog.name} />
			</div>
			<div className="content">
				<h3 className="header">{hog.name}</h3>
				{showDetails && (
					<div className="description">
						<p><strong>Specialty:</strong> {hog.specialty}</p>
						<p><strong>Weight:</strong> {hog.weight}</p>
						<p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
						<p className="achievementText"><strong>Medal:</strong> {hog["highest medal achieved"]}</p>
					</div>
				)}
			</div>
			<div className="extra content">
				<button onClick={() => onHide(hog.name)} className="ui button">Hide</button>
			</div>
		</div>
	);
}

export default Hog;
