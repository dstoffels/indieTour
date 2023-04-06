import { Box, Typography } from '@mui/material';
import DeleteBandPopover from 'components/band/DeleteBandPopover/DeleteBandPopover.jsx';
import DangerZone from 'components/generic/danger-zone/DangerZone/DangerZone.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import React from 'react';
import UserPanel from '../UserPanel/UserPanel.jsx';

const BandDetailsPanel = () => {
	const { activeBand, setActiveBand, isOwner, updateActiveBand } = useBand();
	const color = isOwner ? 'primary' : '';

	return (
		<Panel elevation={-1} size={6} title='Band'>
			<EditField
				variant='h5'
				fieldLabel='Band Name'
				label='Name'
				initValue={activeBand?.name}
				name='name'
				onSubmit={updateActiveBand}
				canEdit={isOwner}
			/>
			<Box padding={2}>
				<Typography color='primary' variant='overline'>
					OWNER
				</Typography>
				<Typography>{activeBand.owner.username}</Typography>
				<Typography>{activeBand.owner.email}</Typography>
			</Box>
			<UserPanel title='Members' />

			<DangerZone show={isOwner}>
				<DeleteBandPopover activeBand={activeBand} setActiveBand={setActiveBand} />
			</DangerZone>
		</Panel>
	);
};

export default BandDetailsPanel;
