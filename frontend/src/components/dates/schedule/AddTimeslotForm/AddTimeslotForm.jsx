import { FormControlLabel, Stack, Switch, TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import LocationField from 'components/generic/LocationField/LocationField.jsx';
import useCustomForm from 'hooks/useCustomForm.js';
import useDates from 'hooks/useDates.js';
import React, { useState } from 'react';

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
	const [startPlace, setStartPlace] = useState({ description: '' });
	const [endPlace, setEndPlace] = useState({ description: '' });

	// const handleLocation = (name, place) => {
	// 	console.log(place);
	// 	const e = {
	// 		target: {
	// 			type: 'text',
	// 			name: [name],
	// 			value: place ? place.description : '',
	// 		},

	// 		persist: () => {},
	// 	};
	// 	handleChange(e);
	// };

	return (
		<ButtonForm
			formData={formData}
			onSubmit={addTimeslot}
			btnText='Add Timeslot'
			direction='column'
			autoClose={false}
		>
			<Stack direction='row' spacing={1}>
				<TextField
					variant='standard'
					required
					focused
					type='time'
					name='start_time'
					label='Start Time'
					value={formData.start_time}
					onChange={handleChange}
				/>
				<TextField
					variant='standard'
					focused
					type='time'
					name='end_time'
					label='End Time'
					value={formData.end_time}
					onChange={handleChange}
				/>
			</Stack>
			<TextField
				variant='standard'
				required
				name='description'
				label='Description'
				value={formData.description}
				onChange={handleChange}
			/>
			<LocationField value={startPlace} onSelect={setStartPlace} label='Start Location' />
			<LocationField value={endPlace} onSelect={setEndPlace} label='End Location' />
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
