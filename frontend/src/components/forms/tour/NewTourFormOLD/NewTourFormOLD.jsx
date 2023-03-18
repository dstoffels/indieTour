import useTour from 'hooks/useTour.js';
import React from 'react';
import TourForm from '../TourForm/TourForm.jsx';

const NewTourFormOLD = () => {
	const { createNewTour } = useTour();

	return <TourForm onSubmit={createNewTour} title='New Tour' submitText='Create Tour' />;
};

export default NewTourFormOLD;
