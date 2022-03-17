import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import Selector from 'Components/Common/Selector/Selector.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import useUser from 'hooks/useUser.js';
import React, { memo } from 'react';
import './TourSelector.css';

const TourSelector = memo(props => {
	const { user } = useUser();
	const { tours, selectTour } = useTours();
	const handleChange = tourName => selectTour(tourName);

	if (user?.activeTour && tours.length) {
		return (
			<Selector
				onChange={handleChange}
				id='tour-selector'
				options={tours}
				nameKey='name'
				defaultSelection={user.activeTour}
			/>
		);
	}
	return null;
});

export default withAuthentication(TourSelector);
