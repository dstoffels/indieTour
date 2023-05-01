import { Button, IconButton, Stack, Switch, TextField, Typography } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import React, { useState, useEffect } from 'react';
import TimeslotTypeSelect from '../TimeslotTypeSelect/TimeslotTypeSelect.jsx';
import useCustomForm from 'hooks/useCustomForm.js';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import LabeledSwitch from 'components/generic/LabeledSwitch/LabeledSwitch.jsx';
import { Close } from '@mui/icons-material';
import LocationField from 'components/generic/LocationField/LocationField.jsx';
import useDates from 'hooks/useDates.js';

const initValue = {
	type: 'Event',
	start_time: '00:00',
	end_time: '',
	after_midnight: false,
	description: '',
	start_location: null,
	end_location: null,
};

const AddTimeslotBtnForm = ({}) => {
	const { addTimeslot } = useDates();
	const { formData, handleChange, reset } = useCustomForm(initValue);

	const Form = formFactory(formData.type);

	const handleSubmit = (formData) => {
		addTimeslot(formData);
		reset();
	};

	return (
		<ButtonForm btnText='Add' direction='column' onSubmit={handleSubmit} formData={formData}>
			<TimeslotTypeSelect value={formData.type} onChange={handleChange} />
			<Form formData={formData} handleChange={handleChange} />
		</ButtonForm>
	);
};

export default AddTimeslotBtnForm;

const EventForm = ({ formData, handleChange }) => {
	const handleEndTimeOn = () => {
		handleChange({ target: { name: 'end_time', value: formData.start_time } });
	};

	const handleCancelEndtime = () => {
		handleChange({ target: { name: 'end_time', value: '' } });
	};

	const handleStartPlace = (value) => {
		handleChange({ target: { name: 'start_location', value } });
	};

	const handleEndPlace = (value) => {
		handleChange({ target: { name: 'end_location', value } });
	};

	const endTimeTag = formData.end_time < formData.start_time ? ' (next day)' : '';

	return (
		<>
			<TextField
				fullWidth
				required
				variant='standard'
				label='Description'
				value={formData.description}
				onChange={handleChange}
				name='description'
			/>
			<SideStack justifyContent='start'>
				<TextField
					fullWidth
					required
					label='Start Time'
					type='time'
					value={formData.start_time}
					onChange={handleChange}
					name='start_time'
					InputProps={{
						endAdornment: (
							<LabeledSwitch
								label='Next Day'
								checked={formData.after_midnight}
								name='after_midnight'
								onChange={handleChange}
							/>
						),
					}}
				/>
				{!formData.end_time && (
					<Button size='large' fullWidth onClick={handleEndTimeOn}>
						End Time?
					</Button>
				)}
				{formData.end_time && (
					<TextField
						fullWidth
						label={'End Time' + endTimeTag}
						type='time'
						value={formData.end_time}
						onChange={handleChange}
						name='end_time'
						InputProps={{
							endAdornment: (
								<IconButton onClick={handleCancelEndtime}>
									<Close />
								</IconButton>
							),
						}}
					/>
				)}
			</SideStack>

			<LocationField
				label='Location'
				value={formData.end_location}
				onSelect={handleEndPlace}
				name='end_location'
			/>
		</>
	);
};

const TravelForm = ({ formData, handleChange }) => {
	const handleStartPlace = (value) => {
		handleChange({ target: { name: 'start_location', value } });
	};

	const handleEndPlace = (value) => {
		handleChange({ target: { name: 'end_location', value } });
	};
	return (
		<>
			<LocationField
				label='Origin'
				value={formData.start_location}
				onSelect={handleStartPlace}
				name='start_location'
			/>
			<LocationField
				label='Destination'
				value={formData.end_location}
				onSelect={handleEndPlace}
				name='end_location'
			/>

			<SideStack justifyContent='start'>
				<TextField
					fullWidth
					required
					label='Departure'
					type='time'
					value={formData.start_time}
					onChange={handleChange}
					name='start_time'
					InputProps={{
						endAdornment: (
							<LabeledSwitch
								label='Next Day'
								checked={formData.after_midnight}
								name='after_midnight'
								onChange={handleChange}
							/>
						),
					}}
				/>
				<TextField
					fullWidth
					label='Arrival'
					type='time'
					value={formData.end_time}
					onChange={handleChange}
					name='end_time'
				/>
			</SideStack>
			<TextField
				fullWidth
				required
				variant='standard'
				label='Description'
				value={formData.description}
				onChange={handleChange}
				name='description'
			/>
		</>
	);
};

function formFactory(type) {
	switch (type) {
		case 'Travel':
			return TravelForm;
		case 'Flight':
			return TravelForm;
		default:
			return EventForm;
	}
}
