import { TextField } from '@mui/material';
import { Stack } from '@mui/system';
import DatePickerModal from 'components/forms/tour/DatePickerModal/DatePickerModal.jsx';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const NewDateForm = ({ activeTour, addTourDate }) => {
	const getNextDate = () => {
		const lastDate = activeTour.dates[activeTour.dates.length - 1];
		return lastDate
			? moment(lastDate.date).add(1, 'day').format('YYYY-MM-DD')
			: moment().format('YYYY-MM-DD');
	};

	const [date, setDate] = useState(getNextDate());
	const [title, setTitle] = useState('');

	const handleDate = date => setDate(date);
	const handleTitle = e => setTitle(e.target.value);

	const clearForm = () => {
		setTitle('');
		setDate(getNextDate());
	};

	const handleSubmit = async () => {
		await addTourDate({ date, title });
	};

	useEffect(() => {
		clearForm();
	}, [activeTour]);

	return (
		<ButtonForm btnText='Add Date' onSubmit={handleSubmit} autoClose={false}>
			<DatePickerModal value={date} onChange={handleDate} tourDates={activeTour.dates} />
			<TextField value={title} onChange={handleTitle} variant='standard' label='Title' />
		</ButtonForm>
	);
};

export default NewDateForm;
