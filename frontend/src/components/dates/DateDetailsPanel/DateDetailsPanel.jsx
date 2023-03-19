import { Divider, FormControlLabel, Switch, Typography } from '@mui/material';
import DangerZone from 'components/generic/DangerZone/DangerZone.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import DeleteDatePopover from '../DeleteDatePopover/DeleteDatePopover.jsx';

const DateDetailsPanel = ({ activeDate, isAdmin, updateDate, deleteDate }) => {
	const handleSwitch = e => {
		updateDate({ [e.target.name]: e.target.checked });
	};

	const confirmedSwitch = (
		<FormControlLabel
			label='Confirmed'
			control={
				<Switch name='is_confirmed' checked={activeDate.is_confirmed} onChange={handleSwitch} />
			}
		/>
	);

	return (
		<Panel title='Details' size={6} elevation={-1} padding={2} actionBtn={confirmedSwitch}>
			<EditField
				label='Location'
				initValue={activeDate.location}
				name='location'
				canEdit={isAdmin}
				onSubmit={updateDate}>
				<Typography variant='overline' color='primary'>
					Location
				</Typography>
			</EditField>
			<EditField
				label='Notes'
				initValue={activeDate.notes}
				name='notes'
				canEdit={isAdmin}
				onSubmit={updateDate}
				fullWidth
				multiline>
				<Typography variant='overline' color='primary'>
					Notes
				</Typography>
			</EditField>
			<Divider />
			<DangerZone show={isAdmin}>
				<DeleteDatePopover date={activeDate} deleteDate={deleteDate} />
			</DangerZone>
		</Panel>
	);
};

export default DateDetailsPanel;
