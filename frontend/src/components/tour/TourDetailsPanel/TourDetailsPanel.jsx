import { Divider, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import DangerZone from 'components/generic/DangerZone/DangerZone.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import React from 'react';
import withActiveTour from 'utils/withActiveTour.js';
import DeleteTourPopover from '../DeleteTourPopover/DeleteTourPopover.jsx';

const TourDetailsPanel = ({ activeTour, deleteTour, fetchActiveTour, updateTour }) => {
	const { isOwner, isAdmin } = useBand();

	const handleArchived = e => {
		updateTour({ is_archived: e.target.checked });
	};

	const archiveSwitch = isAdmin ? (
		<FormControlLabel
			control={<Switch value={activeTour.is_archived} onChange={handleArchived} />}
			label='Archive'
			name='is_archved'
		/>
	) : null;

	return (
		<Panel title='Details' size={4} elevation={-1} padding={2} actionBtn={archiveSwitch}>
			<EditField
				label='Notes'
				initValue={activeTour.notes}
				name='notes'
				canEdit
				onSubmit={updateTour}
				multiline
				fullWidth>
				<Typography variant='overline' color='primary'>
					Notes
				</Typography>
			</EditField>
			<DangerZone show={isOwner}>
				<DeleteTourPopover activeTour={activeTour} deleteTour={deleteTour} />
			</DangerZone>
		</Panel>
	);
};

export default withActiveTour(TourDetailsPanel);
