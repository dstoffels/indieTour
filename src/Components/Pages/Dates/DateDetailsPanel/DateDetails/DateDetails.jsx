import { Stack, Switch, Typography } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import ConfirmSwitch from './ConfirmSwitch.jsx';
import Map from '../Map.jsx';

export const EDIT_DATE_FORM_ID = 'edit-date-form';

const DateDetails = ({ activeDate, editMode, editActiveDate }) => {
	const { date, title, location, isConfirmed, deal, notes } = activeDate;

	const handleChange = e => {
		editActiveDate({ ...activeDate, [e.target.name]: e.target.value });
	};

	const confirmed = isConfirmed ? (
		<Typography color='primary' variant='button'>
			CONFIRMED{' '}
		</Typography>
	) : (
		<Typography color='warning.main' variant='button'>
			UNCONFIRMED
		</Typography>
	);

	const handleSubmit = () => {};

	return (
		<form id={EDIT_DATE_FORM_ID} onSubmit={handleSubmit}>
			<Stack spacing={2}>
				<Stack direction='row' spacing={2} justifyContent='space-between'>
					<Panel.Header
						value={title}
						label='Event Title'
						name='title'
						editing={editMode}
						onChange={handleChange}>
						{title}
					</Panel.Header>
					{editMode ? <ConfirmSwitch value={isConfirmed} onChange={handleChange} /> : confirmed}
				</Stack>

				<Panel.Field
					isLocationField
					label='Location'
					show={location}
					editing={editMode}
					onChange={handleChange}>
					{location}
				</Panel.Field>

				<Map location={location} />

				<Panel.Field multiline label='Deal' show={deal} editing={editMode} onChange={handleChange}>
					{deal}
				</Panel.Field>

				<Panel.Field
					multiline
					label='Notes'
					show={notes}
					editing={editMode}
					onChange={handleChange}>
					{notes}
				</Panel.Field>
			</Stack>
		</form>
	);
};

export default DateDetails;
