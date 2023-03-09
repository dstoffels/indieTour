import useTour from 'hooks/useTour.js';
import React from 'react';
import TourForm from '../TourForm/TourForm.jsx';

const EditTourForm = () => {
	const { updateTour } = useTour();
	return <TourForm title='Edit Tour' submitText='UPDATE' onSubmit={updateTour} />;
};

export default EditTourForm;
