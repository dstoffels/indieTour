import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import Selector from 'Components/Common/Selector/Selector.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import useUser from 'hooks/useUser.js';
import React, { memo } from 'react';
import './TourSelector.css';

const TourSelector = props => {
	const { user } = useUser();
	const { tours, selectTour } = useTours();
	const tour = user?.activeMember?.activeTour;

	const handleChange = tour => selectTour(tour);

	const gate = Boolean(tours.find(t => t.name === tour.name));

	if (tour && tours.length && gate) {
		return (
			<Selector
				onChange={handleChange}
				id='tour-selector'
				options={tours}
				nameKey='name'
				defaultSelection={tour}
			/>
		);
	}
	return null;
};

export default withAuthentication(TourSelector);
