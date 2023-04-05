import React, { useState } from 'react';
import { Divider, Stack } from '@mui/material';
import DangerZone from 'components/generic/danger-zone/DangerZone/DangerZone.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import DeleteDatePopover from '../DeleteDatePopover/DeleteDatePopover.jsx';
import useDates from 'hooks/useDates.js';
import useBand from 'hooks/useBand.js';
import LocationEditField from 'components/generic/LocationEditField/LocationEditField.jsx';
import Map from 'components/generic/Map/Map.jsx';

const DateDetailsPanel = ({}) => {
	const { isAdmin } = useBand();
	const { activeDate, updateActiveDate, deleteActiveDate } = useDates();

	const handleLocationSubmit = (place) => {
		updateActiveDate({ location: place.description, place_id: place.place_id });
	};

	return (
		<Panel title='Details' size={4} elevation={-1} padding={2}>
			<Stack spacing={2}>
				<LocationEditField initValue={activeDate.location} onSubmit={handleLocationSubmit} />
				<Map place_id={activeDate.place_id} />
				<EditField
					label='Title'
					initValue={activeDate.title}
					name='title'
					onSubmit={updateActiveDate}
					canEdit={isAdmin}
				/>
				<EditField
					label='Notes'
					initValue={activeDate?.notes}
					name='notes'
					canEdit={isAdmin}
					onSubmit={updateActiveDate}
					fullWidth
					multiline
				/>
				<Divider />
				<DangerZone show={isAdmin}>
					<DeleteDatePopover date={activeDate} deleteDate={deleteActiveDate} />
				</DangerZone>
			</Stack>
		</Panel>
	);
};

export default DateDetailsPanel;
