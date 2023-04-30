import React, { useEffect, useState } from 'react';
import { Divider, IconButton, Stack, Switch, Typography } from '@mui/material';
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
import PanelSwitch from 'components/generic/PanelSwitch/PanelSwitch.jsx';
import ContactListPanel from '../contacts/DateContactListPanel/DateContactListPanel.jsx';

const DateDetailsPanel = ({ showDates, toggleShowDates }) => {
	const { isAdmin } = useBand();
	const { activeDate, updateActiveDate, deleteActiveDate, fetchDateContacts } = useDates();

	const handleLocationSubmit = (place) => {
		updateActiveDate({ place });
	};

	const handleShowDay = () => {
		updateActiveDate({ is_show_day: !activeDate.is_show_day });
	};

	const handleConfirmation = () => {
		updateActiveDate({ is_confirmed: !activeDate.is_confirmed });
	};

	return (
		<Panel
			size={6}
			elevation={-1}
			titleEl={
				<Stack direction='row' alignItems='center'>
					<IconButton onClick={toggleShowDates}>
						{showDates ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</IconButton>
					<Typography variant='h5' padding={2}>
						{moment(activeDate?.date).format('ddd DD MMM YYYY')}
					</Typography>
				</Stack>
			}
		>
			<Stack>
				<PanelSwitch
					show={isAdmin}
					checked={activeDate.is_show_day}
					onClick={handleShowDay}
					label='Show Day'
				/>
				<PanelSwitch
					show={activeDate.is_show_day && isAdmin}
					checked={activeDate.is_confirmed}
					onClick={handleConfirmation}
					label='Confirmed'
				/>
				<EditField
					label='Title'
					initValue={activeDate.title}
					name='title'
					onSubmit={updateActiveDate}
					canEdit={isAdmin}
				/>
				<LocationEditField initValue={activeDate?.place} onSubmit={handleLocationSubmit} />
				{/* <Map place_id={activeDate.place?.place_id} /> */}
				<EditField
					label='Notes'
					initValue={activeDate?.notes}
					name='notes'
					canEdit={isAdmin}
					onSubmit={updateActiveDate}
					fullWidth
					multiline
				/>
				<ContactListPanel />
				<DangerZone show={isAdmin}>
					<DeleteDatePopover date={activeDate} deleteDate={deleteActiveDate} />
				</DangerZone>
			</Stack>
		</Panel>
	);
};

export default DateDetailsPanel;
