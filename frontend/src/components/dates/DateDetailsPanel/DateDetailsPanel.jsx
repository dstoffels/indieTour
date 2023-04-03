import { Divider, FormControlLabel, Switch, Typography } from '@mui/material';
import DangerZone from 'components/generic/DangerZone/DangerZone.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import LocationField from 'components/generic/LocationField/LocationField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useTour from 'hooks/useTour.js';
import React from 'react';
import DeleteDatePopover from '../DeleteDatePopover/DeleteDatePopover.jsx';
import useAPI from 'hooks/useAPI.js';

const DateDetailsPanel = ({ activeDate, activeTour, isAdmin, updateDate, deleteDate }) => {
	const api = useAPI();
	const { fetchActiveTour } = useTour();
	const handleSwitch = (e) => {
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

	const handleLocation = async (formData) => {
		const response = await api.date.detail.patch(activeDate.id, formData);
		await fetchActiveTour();
	};

	return (
		<Panel title='Details' size={6} elevation={-1} padding={2} actionBtn={confirmedSwitch}>
			<LocationField
				label='Location'
				initValue={activeDate.location}
				canEdit={isAdmin}
				activeDate={activeDate}
				onSubmit={handleLocation}
			/>
			<EditField
				label='Notes'
				initValue={activeDate.notes}
				name='notes'
				canEdit={isAdmin}
				onSubmit={updateDate}
				fullWidth
				multiline
			>
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
