import { Stack, Switch, Typography } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import ConfirmSwitch from './ConfirmSwitch.jsx';
import IsShowDaySwitch from './IsShowDaySwitch.jsx';
import Map from './Map.jsx';

export const EDIT_DATE_FORM_ID = 'edit-date-form';

const DateDetails = ({ activeDate, editMode, editActiveDate }) => {
	const { date, title, location, isConfirmed, isShowDay, deal, notes } = activeDate;

	const handleChange = e => {
		editActiveDate({ ...activeDate, [e.target.name]: e.target.value });
	};

	const confirmed = isConfirmed ? (
		<Typography color='primary' variant='overline'>
			CONFIRMED
		</Typography>
	) : (
		<Typography color='warning.main' variant='overline'>
			UNCONFIRMED
		</Typography>
	);

	const handleSubmit = () => {};

	return (
		<form id={EDIT_DATE_FORM_ID} onSubmit={handleSubmit}>
			<Stack spacing={2}>
				<Panel.Header
					value={title}
					label='Event Title'
					name='title'
					editing={editMode}
					onChange={handleChange}>
					{title}
				</Panel.Header>

				<Stack direction='row' spacing={2}>
					{editMode ? <IsShowDaySwitch value={isShowDay} onChange={handleChange} /> : confirmed}
					{editMode && <ConfirmSwitch value={isConfirmed} onChange={handleChange} />}
				</Stack>

				<Panel.Field
					isLocationField
					label='Location'
					show={location}
					editing={editMode}
					onChange={handleChange}>
					{location}
				</Panel.Field>

				{!editMode && <Map location={location} />}

				{isShowDay && (
					<Panel.Field
						multiline
						label='Deal'
						show={deal}
						editing={editMode}
						onChange={handleChange}>
						{deal}
					</Panel.Field>
				)}

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
