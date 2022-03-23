import { Paper, Stack, Switch, TextField, Typography } from '@mui/material';
import DatePicker from 'Components/Common/DatePicker/DatePicker.jsx';
import ModalForm from 'Components/Common/ModalForm/ModalForm.jsx';
import { TourDate } from 'Components/Pages/Console/Tours/TourForm/DateRangePicker.jsx';
import useForm from 'hooks/useForm.js';
import React, { useEffect } from 'react';
import { ADD_DATE_FORM_ID } from './AddDateModal.jsx';
import LocationField from './LocationField.jsx';

const getNextDate = dates => {
	const lastDate = new Date(dates[dates.length - 1].date);
	lastDate.setDate(lastDate.getDate() + 1);
	return lastDate.toDateString();
};

export const eventBldr = (name, value) => {
	return { target: { name, value } };
};

const AddDateForm = ({ tourName, tourDates, submitBtn, onSubmit }) => {
	const { form, handleChange, handleSubmit } = useForm(TourDate(getNextDate(tourDates)), submitCB);

	function submitCB() {
		onSubmit(form);
	}

	return (
		<Paper elevation={0} className='p-3'>
			<ModalForm
				title={`Add Date to ${tourName}`}
				onSubmit={handleSubmit}
				formId={ADD_DATE_FORM_ID}>
				<div className='flex-between'>
					<DatePicker
						value={form.date}
						onChange={handleChange}
						tourDates={tourDates}
						size='medium'
					/>
					<Stack spacing={0}>
						<Typography variant='caption'>Confirmed</Typography>
						<Switch
							className='m-auto'
							value={form.isConfirmed}
							onChange={() => {
								handleChange({ target: { name: 'isConfirmed', value: !form.isConfirmed } });
							}}
						/>
					</Stack>
				</div>
				<TextField
					label='Title'
					name='title'
					onChange={handleChange}
					value={form.title}
					onBlur={() => !form.location && handleChange(eventBldr('location', form.title))}
				/>
				<LocationField value={form.location} onChange={handleChange} />
				<TextField
					multiline
					maxRows={4}
					label='Deal'
					name='deal'
					onChange={handleChange}
					value={form.deal}
				/>
				<TextField
					label='Notes'
					multiline
					maxRows={6}
					name='notes'
					onChange={handleChange}
					value={form.notes}
				/>
			</ModalForm>
			<Stack spacing={1} marginTop={2}>
				{submitBtn}
				{/* <div className='flex-end'>{actions}</div> */}
			</Stack>
		</Paper>
	);
};

export default AddDateForm;
