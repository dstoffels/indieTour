import { TextField } from '@mui/material';
import DatePickerModal from 'components/forms/tour/DatePickerModal/DatePickerModal.jsx';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useEscKey from 'hooks/useEscKey.js';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const NewDateForm = ({ tourdates, addTourDate }) => {
	const getNextDate = () => {
		const lastDate = tourdates[tourdates.length - 1];
		return lastDate
			? moment(lastDate.date).add(1, 'day').format('YYYY-MM-DD')
			: moment().format('YYYY-MM-DD');
	};

	const [date, setDate] = useState(getNextDate());
	const [title, setTitle] = useState('');

	const handleDate = (date) => setDate(date);
	const handleTitle = (e) => setTitle(e.target.value);

	const clearForm = () => {
		setTitle('');
		setDate(getNextDate());
	};

	const handleSubmit = () => {
		addTourDate({ date, title });
	};

	useEffect(() => {
		clearForm();
	}, [tourdates]);

	return (
		<ButtonForm btnText='Add Date' onSubmit={handleSubmit} autoClose={false}>
			<DatePickerModal value={date} onChange={handleDate} tourDates={tourdates} />
			<TextField value={title} onChange={handleTitle} variant='standard' label='Title' />
		</ButtonForm>
	);
};

export default NewDateForm;
