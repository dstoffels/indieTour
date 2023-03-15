import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import useBand from 'hooks/useBand.js';
import React from 'react';
import BandForm from '../BandForm/BandForm.jsx';
import DeleteBandPopover from '../DeleteBandPopover/DeleteBandPopover.jsx';

const EditBandForm = ({}) => {
	const { editBand } = useBand();

	return (
		<BandForm title='Edit Band' submitText='Update Band' onSubmit={editBand}>
			<Paper>
				<Stack spacing={2} padding={2} textAlign='center'>
					<Typography color='error' variant='h6'>
						DANGER ZONE!
					</Typography>
					<Divider />
					<DeleteBandPopover />
				</Stack>
			</Paper>
		</BandForm>
	);
};

export default EditBandForm;
