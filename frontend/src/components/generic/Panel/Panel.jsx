import { AppBar, Box, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const Panel = ({
	size,
	title,
	titleEl,
	titleVariant = 'h5',
	actionBtn = null,
	children,
	elevation = 0,
	padding = 0,
}) => {
	const [form, setForm] = useState(null);

	return (
		<Grid item xs={12} md={size} height='100%' sx={{ overflowY: 'auto' }}>
			<Paper elevation={5 + elevation} sx={{ height: '100%', borderRadius: 0 }}>
				<AppBar elevation={2 + elevation} position='relative'>
					<Toolbar>
						<div className='flex justify-between flex-grow align-center'>
							{titleEl ? titleEl : <Typography variant={titleVariant}>{title}</Typography>}
							{actionBtn}
						</div>
					</Toolbar>
				</AppBar>
				<Box padding={padding}>{children}</Box>
			</Paper>
		</Grid>
	);
};

export default Panel;
