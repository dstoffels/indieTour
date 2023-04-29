import { Box, Divider, Stack, Typography } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import React from 'react';

const DangerZone = ({ show = null, children }) => {
	return (
		show && (
			<Panel
				elevation={-2}
				isSubPanel
				titleEl={
					<Typography padding={2} color='error' variant='h6'>
						DANGER ZONE!
					</Typography>
				}
			>
				{children}
			</Panel>
		)
	);
};

export default DangerZone;
