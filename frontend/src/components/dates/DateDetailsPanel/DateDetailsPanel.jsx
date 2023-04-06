import React, { useState } from 'react';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import DangerZone from 'components/generic/danger-zone/DangerZone/DangerZone.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import DeleteDatePopover from '../DeleteDatePopover/DeleteDatePopover.jsx';
import useDates from 'hooks/useDates.js';
import useBand from 'hooks/useBand.js';
import LocationEditField from 'components/generic/LocationEditField/LocationEditField.jsx';
import Map from 'components/generic/Map/Map.jsx';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import moment from 'moment';

const DateDetailsPanel = ({ showDates, toggleShowDates }) => {
	const { isAdmin } = useBand();
	const { activeDate, updateActiveDate, deleteActiveDate, parsePlace } = useDates();

	const handleLocationSubmit = (place) => {
		updateActiveDate(parsePlace(place));
	};

	return (
		<Panel
			titleEl={
				<Stack direction='row' alignItems='center'>
					<IconButton onClick={toggleShowDates}>
						{showDates ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</IconButton>
					<Typography variant='h5' padding={2}>
						{moment(activeDate?.date).format('dddd DD MMMM YYYY')}
					</Typography>
				</Stack>
			}
			size={6}
			elevation={-1}
		>
			<Stack spacing={2}>
				<EditField
					label='Title'
					initValue={activeDate.title}
					name='title'
					onSubmit={updateActiveDate}
					canEdit={isAdmin}
				/>
				<LocationEditField initValue={activeDate.location} onSubmit={handleLocationSubmit} />
				<Map place_id={activeDate.place_id} />
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
