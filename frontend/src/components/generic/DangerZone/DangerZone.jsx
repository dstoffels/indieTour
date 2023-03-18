import { Divider, Stack, Typography } from '@mui/material';
import useBand from 'hooks/useBand.js';
import React from 'react';

const DangerZone = ({ show = null, children }) => {
	return (
		show && (
			<>
				<Divider />
				<Stack spacing={2} padding={2} textAlign='center'>
					<Typography color='error' variant='h6'>
						DANGER ZONE!
					</Typography>
					{children}
				</Stack>
			</>
		)
	);
};

export default DangerZone;
