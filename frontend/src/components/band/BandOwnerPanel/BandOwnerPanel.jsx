import { Box, Divider, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import DeleteBandPopover from 'components/band/DeleteBandPopover/DeleteBandPopover.jsx';
import DangerZone from 'components/generic/DangerZone/DangerZone.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useAuth from 'hooks/useAuth.js';
import React from 'react';
import withActiveBand from 'utils/withActiveBand.js';

const BandOwnerPanel = ({ activeBand, isOwner }) => {
	const color = isOwner ? 'primary' : '';

	return (
		<Panel size={4} elevation={-1} title='Owner' padding={1}>
			<Box padding={1}>
				<Typography color={color}>{activeBand.owner.username}</Typography>
				<Typography color={color}>{activeBand.owner.email}</Typography>
			</Box>
			<DangerZone show={isOwner}>
				<DeleteBandPopover />
			</DangerZone>
		</Panel>
	);
};

export default BandOwnerPanel;
