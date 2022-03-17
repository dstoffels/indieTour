import Panel from 'Components/Common/Panel/Panel.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React from 'react';
import TourSelector from '../TourSelector/TourSelector.jsx';

const TourPanel = props => {
	const { tours } = useTours();

	const displayTours = tours.map(tour => <li key={tour.name}>{tour.name}</li>);

	return (
		<Panel title='TOURS'>
			<ul>{displayTours} </ul>
			<TourSelector />
		</Panel>
	);
};

export default TourPanel;
