import { Paper } from '@mui/material';
import React from 'react';
import CreateTourBtn from '../TourForm/CreateTourBtn.jsx';
import TourForm from '../TourForm/TourForm.jsx';
import useTours from '../useTours.js';

export const NEW_TOUR_FORM_ID = 'new-tour-form';

class FormManager {
	name = '';
	notes = '';
	dates = [];

	setDate = (i, date) => {
		this.dates[i] = date;
		console.log(this.dates);
	};
	setDates = dates => {
		this.dates = dates;
		console.log(this.dates);
	};
	submitForm = (tourData, onSubmit) => {
		onSubmit({ ...tourData, dates: this.dates });
	};
}

const NewTourModal = props => {
	const { createTour } = useTours();

	const handleSubmit = form => {
		createTour(form);
	};

	const mgr = new FormManager();

	return (
		<Paper elevation={0} className='p-3'>
			<TourForm
				title='Create new tour'
				id={NEW_TOUR_FORM_ID}
				onSubmit={handleSubmit}
				submitBtn={<CreateTourBtn />}
			/>
		</Paper>
	);
};

export default NewTourModal;
