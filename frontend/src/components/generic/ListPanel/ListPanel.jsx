import Grid from '@mui/material/Unstable_Grid2/Grid2.js';
import { Box, Button, IconButton, List, Typography } from '@mui/material';
import React from 'react';
import { Stack } from '@mui/system';
import { Add, AddCircle } from '@mui/icons-material';

const ListPanel = ({ title, list, onAdd }) => {
	return (
		<Grid xs={12} md={6}>
			<Box sx={{ backgroundColor: 'black', px: 2 }}>
				<Stack direction='row' justifyContent='space-between'>
					<Typography lineHeight={2} variant='h5'>
						{title}
					</Typography>
					{onAdd && (
						<IconButton variant='text' color='primary' onClick={onAdd}>
							<AddCircle fontSize='large' />
						</IconButton>
					)}
				</Stack>
			</Box>
			<List subheader={<li />}>{list}</List>
		</Grid>
	);
};

export default ListPanel;
