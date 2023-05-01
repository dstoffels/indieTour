import { Button, IconButton, Stack, Switch, TextField, Typography } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import React, { useState, useEffect } from 'react';
import TimeslotTypeSelect from '../TimeslotTypeSelect/TimeslotTypeSelect.jsx';
import useCustomForm from 'hooks/useCustomForm.js';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import LabeledSwitch from 'components/generic/LabeledSwitch/LabeledSwitch.jsx';
import { Close } from '@mui/icons-material';
import LocationField from 'components/generic/LocationField/LocationField.jsx';

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
	const { formData, handleChange } = useCustomForm(initValue);

	const Form = formFactory(formData.type);

	return (
		<ButtonForm btnText='Add' direction='column'>
			<TimeslotTypeSelect value={formData.type} onChange={handleChange} />
			<Form formData={formData} handleChange={handleChange} />
		</ButtonForm>
	);
};

export default AddTimeslotBtnForm;

const EventForm = ({ formData, handleChange }) => {
	const [endTimeOn, setEndTimeOn] = useState(false);
	console.log(formData);

	const handleEndTimeOn = () => {
		handleChange({ target: { name: 'end_time', value: formData.start_time } });
		setEndTimeOn(true);
	};

	const handleCancelEndtime = () => {
		handleChange({ target: { name: 'end_time', value: '' } });
		setEndTimeOn(false);
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
					<Button fullWidth onClick={handleEndTimeOn}>
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
			<SideStack>
				<LocationField
					label='Start Location'
					value={formData.start_location}
					onSelect={handleStartPlace}
					name='start_location'
				/>
				<LocationField
					label='End Location'
					value={formData.end_location}
					onSelect={handleEndPlace}
					name='end_location'
				/>
			</SideStack>
		</>
	);
};

const TravelForm = ({ formData, handleChange }) => {
	return <></>;
};

function formFactory(type) {
	switch (type) {
		case 'Travel':
			return TravelForm;
		default:
			return EventForm;
	}
}
