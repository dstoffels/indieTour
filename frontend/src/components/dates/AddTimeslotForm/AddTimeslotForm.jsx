import { FormControlLabel, Stack, Switch, TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useCustomForm from 'hooks/useCustomForm.js';
import useDates from 'hooks/useDates.js';
import useForm from 'hooks/useForm.js';
import moment from 'moment';
import React from 'react';

const initValues = {
	description: '',
	start_time: '',
	end_time: undefined,
	start_location: '',
	end_location: '',
	after_midnight: false,
};

const AddTimeslotForm = ({}) => {
	const { addTimeslot } = useDates();
	const { formData, handleChange } = useCustomForm(initValues);

	return (
		<ButtonForm
			formData={formData}
			onSubmit={addTimeslot}
			btnText='Add Timeslot'
			direction='column'>
			<Stack direction='row' spacing={1}>
				<TextField
					required
					type='time'
					name='start_time'
					label='Start Time'
					value={formData.start_time}
					onChange={handleChange}
				/>
				<TextField
					type='time'
					name='end_time'
					label='End Time'
					value={formData.end_time}
					onChange={handleChange}
				/>
			</Stack>
			<TextField
				required
				name='description'
				label='Description'
				value={formData.description}
				onChange={handleChange}
			/>
			<TextField
				name='start_location'
				label='Start Location'
				value={formData.start_location}
				onChange={handleChange}
			/>
			<TextField
				name='end_location'
				label='End Location'
				value={formData.end_location}
				onChange={handleChange}
			/>
			<FormControlLabel
				label='After Midnight'
				control={
					<Switch name='after_midnight' checked={formData.after_midnight} onChange={handleChange} />
				}
			/>
		</ButtonForm>
	);
};

export default AddTimeslotForm;
