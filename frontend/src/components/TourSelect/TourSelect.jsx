import SelectMenu from 'components/generic/SelectMenu/SelectMenu.jsx';
import useStore from 'hooks/useStore.js';
import React, { useEffect, useState } from 'react';
import { setActiveTourThunk } from 'redux/tourSlice.js';
import withActiveBand from 'utils/withActiveBand.js';
import withAuth from 'utils/withAuth.js';

const TourSelect = ({}) => {
	const { activeBand, activeTour, dispatch } = useStore();
	const tours = activeBand?.tours ? activeBand.tours : [];
	const options = tours.map(({ name }) => name);

	const handleChange = tourName => {
		const tour = tours.find(({ name }) => tourName == name);
		dispatch(setActiveTourThunk(tour.id));
	};

	return (
		<SelectMenu
			init={activeTour ? activeTour.name : ''}
			options={options}
			onChange={handleChange}
			id='tour-select'
			label={activeTour ? activeBand?.name : 'Select a tour'}
		/>
	);
};

export default withAuth(withActiveBand(TourSelect));
