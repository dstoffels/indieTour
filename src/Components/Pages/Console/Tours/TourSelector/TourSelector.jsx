import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import Selector from 'Components/Common/Selector/Selector.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import useUser from 'hooks/useUser.js';
import React, { memo } from 'react';
import './TourSelector.css';

const TourSelector = props => {
	const { activeTour, tours, selectTour } = useTours();

	const handleChange = tour => selectTour(tour);

	const gate = Boolean(tours.find(t => t.name === activeTour?.name));

	if (activeTour && tours.length && gate) {
		return (
			<Selector
				onChange={handleChange}
				id='tour-selector'
				options={tours}
				nameKey='name'
				defaultSelection={activeTour}
			/>
		);
	}
	return null;
};

export default withAuthentication(TourSelector);
