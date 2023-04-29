import { Divider, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import DangerZone from 'components/generic/danger-zone/DangerZone/DangerZone.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import React from 'react';
import DeleteTourPopover from '../DeleteTourPopover/DeleteTourPopover.jsx';
import useTour from 'hooks/useTour.js';
import LabeledSwitch from 'components/generic/LabeledSwitch/LabeledSwitch.jsx';
import UserPanel from 'components/band/UserPanel/UserPanel.jsx';
import DatesListPanel from 'components/dates/DatesListPanel/DatesListPanel.jsx';
import PanelSwitch from 'components/generic/PanelSwitch/PanelSwitch.jsx';

const TourDetailsPanel = ({ size }) => {
	const { isAdmin } = useBand();
	const { activeTour, tourusers, deleteTour, deleteActiveTour, updateActiveTour, withActiveTour } =
		useTour();

	const handleArchived = () => {
		updateActiveTour({ is_archived: !activeTour.is_archived });
	};

	return withActiveTour(
		<Panel title='Tour' elevation={-1} padding={0} size={size}>
			<EditField
				fieldLabel='Tour Name'
				label='name'
				initValue={activeTour?.name}
				name='name'
				variant='h6'
				onSubmit={updateActiveTour}
				canEdit={isAdmin}
			/>

			<EditField
				label='Notes'
				initValue={activeTour?.notes}
				name='notes'
				canEdit
				onSubmit={updateActiveTour}
				multiline
				fullWidth
			/>
			<DatesListPanel elevation={-1} />

			<UserPanel title='Personnel' forTour users={tourusers} />

			<DangerZone show={isAdmin}>
				<PanelSwitch
					checked={activeTour?.is_archived}
					onClick={handleArchived}
					label='Archive Tour'
				/>
				<DeleteTourPopover activeTour={activeTour} deleteTour={deleteActiveTour} />
			</DangerZone>
		</Panel>,
	);
};

export default TourDetailsPanel;
