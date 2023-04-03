import { Divider, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import DangerZone from 'components/generic/DangerZone/DangerZone.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import React from 'react';
import DeleteTourPopover from '../DeleteTourPopover/DeleteTourPopover.jsx';
import useTour from 'hooks/useTour.js';

const TourDetailsPanel = () => {
	const { isOwner, isAdmin } = useBand();
	const { activeTour, deleteTour, deleteActiveTour, updateActiveTour } = useTour();

	const handleArchived = (e) => {
		updateActiveTour({ is_archived: e.target.checked });
	};

	const archiveSwitch = isAdmin ? (
		<FormControlLabel
			control={<Switch checked={activeTour.is_archived} onChange={handleArchived} />}
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
				onSubmit={updateActiveTour}
				multiline
				fullWidth
			>
				<Typography variant='overline' color='primary'>
					Notes
				</Typography>
			</EditField>
			<DangerZone show={isOwner}>
				<DeleteTourPopover activeTour={activeTour} deleteTour={deleteActiveTour} />
			</DangerZone>
		</Panel>
	);
};

export default TourDetailsPanel;
