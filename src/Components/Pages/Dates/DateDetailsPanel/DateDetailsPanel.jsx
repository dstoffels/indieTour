import { Delete } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import useWindow from 'hooks/useWindow.js';
import React, { useEffect, useState } from 'react';
import useDates from '../useDates.js';
import EditModeSwitch from './EditModeSwitch.jsx';
import Map from './Map.jsx';

export const EDIT_DATE_FORM_ID = 'edit-date-form';

const DateDetailsPanel = () => {
	// TODO: use screensize to determine if shown vs. dialog
	const { screenX } = useWindow();

	const { activeDate, editMode, editActiveDate } = useDates();

	const handleChange = e => {
		editActiveDate({ ...activeDate, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {};

	const actions = (
		<Stack direction='row' spacing={3}>
			{editMode && (
				<Button color='error' startIcon={<Delete />}>
					DELETE
				</Button>
			)}
			<EditModeSwitch />
		</Stack>
	);

	if (activeDate) {
		const { date, title, location, isConfirmed, deal, notes } = activeDate;

		return (
			<Panel title={activeDate.date} actions={actions}>
				<form id={EDIT_DATE_FORM_ID} onSubmit={handleSubmit}>
					<Stack spacing={2}>
						<Stack direction='row' className='flex-between'>
							<Panel.Header value={title} label='Title' editing={editMode} onChange={handleChange}>
								{title}
							</Panel.Header>
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

						<Panel.Field
							multiline
							label='Deal'
							show={deal}
							editing={editMode}
							onChange={handleChange}>
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
			</Panel>
		);
	}
	return null;
};

export default DateDetailsPanel;
