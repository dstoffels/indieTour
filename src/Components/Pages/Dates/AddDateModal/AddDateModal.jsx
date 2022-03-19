import ModalForm from 'Components/Common/ModalForm/ModalForm.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React from 'react';
import DateForm from '../DateForm/DateForm.jsx';

export const ADD_DATE_FORM_ID = 'add-date-form';

const AddDateModal = props => {
	const { activeTour } = useTours();
	const handleSubmit = form => {
		console.log(form);
	};

	return (
		<DateForm
			title={`Add date to ${activeTour.name}`}
			id={ADD_DATE_FORM_ID}
			onSubmit={handleSubmit}></DateForm>
	);
};

export default AddDateModal;
