import { Typography } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useAuth from 'hooks/useAuth.js';
import React from 'react';
import withActiveBand from 'utils/withActiveBand.js';

const BandOwnerPanel = ({ activeBand, isOwner }) => {
	const color = isOwner ? 'primary' : '';

	return (
		<Panel size={12} elevation={-1} title='Owner' padding={1}>
			<Typography color={color}>{activeBand.owner.username}</Typography>
			<Typography color={color}>{activeBand.owner.email}</Typography>
		</Panel>
	);
};

export default withActiveBand(BandOwnerPanel);
