import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const Panel = ({ size, title, actionBtn = null, children }) => {
	return (
		<Grid item xs={12} md={size} height='100%' sx={{ overflowY: 'auto' }}>
			<Paper elevation={3} sx={{ height: '100%' }}>
				<Box sx={{ backgroundColor: 'black', px: 2 }}>
					<Stack direction='row' justifyContent='space-between'>
						<Typography lineHeight={2.5} variant='h5'>
							{title}
						</Typography>
						{actionBtn}
					</Stack>
				</Box>
				<Box padding={2}>{children}</Box>
			</Paper>
		</Grid>
	);
};

export default Panel;
