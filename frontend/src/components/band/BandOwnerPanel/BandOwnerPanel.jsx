import { Box, Typography } from '@mui/material';
import DeleteBandPopover from 'components/band/DeleteBandPopover/DeleteBandPopover.jsx';
import DangerZone from 'components/generic/DangerZone/DangerZone.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import React from 'react';

const BandOwnerPanel = () => {
	const { activeBand, setActiveBand, isOwner } = useBand();
	const color = isOwner ? 'primary' : '';

	return (
		<Panel size={4} elevation={-1} title='Owner' padding={1}>
			<Box padding={1}>
				<Typography color={color}>{activeBand.owner.username}</Typography>
				<Typography color={color}>{activeBand.owner.email}</Typography>
			</Box>
			<DangerZone show={isOwner}>
				<DeleteBandPopover activeBand={activeBand} setActiveBand={setActiveBand} />
			</DangerZone>
		</Panel>
	);
};

export default BandOwnerPanel;
