import React, { useState } from "react";
import { Card, Button, Image } from 'semantic-ui-react';

function Hog({ hog, onHide }) {
	const [showDetails, setShowDetails] = useState(false);

	const handleToggleDetails = () => {
		setShowDetails(!showDetails);
	};

	return (
		<Card onClick={handleToggleDetails}>
			<Image src={hog.image} alt={hog.name} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{hog.name}</Card.Header>
				{showDetails && (
					<Card.Description>
						<p><strong>Specialty:</strong> {hog.specialty}</p>
						<p><strong>Weight:</strong> {hog.weight}</p>
						<p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
						<p><strong>Medal:</strong> {hog["highest medal achieved"]}</p>
					</Card.Description>
				)}
			</Card.Content>
			<Card.Content extra>
				<Button onClick={(e) => { e.stopPropagation(); onHide(hog.name); }} color='red'>Hide</Button>
			</Card.Content>
		</Card>
	);
}

export default Hog;
