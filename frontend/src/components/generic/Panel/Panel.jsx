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
	return (
		<Grid item xs={12} lg={size} height='100%' sx={{ overflowY: 'auto' }}>
			<Paper elevation={5 + elevation} sx={{ height: '100%', borderRadius: 0 }}>
				<Paper elevation={2 + elevation} position='relative'>
					<div className='flex justify-between align-center'>
						{titleEl ? (
							titleEl
						) : (
							<Typography padding={2} variant={titleVariant}>
								{title}
							</Typography>
						)}
						{actionBtn}
					</div>
				</Paper>
				<Box padding={padding}>{children}</Box>
			</Paper>
		</Grid>
	);
};

export default Panel;

const PanelHeader = ({ elevation, title, titleEl, titleVariant, actionBtn }) => {
	return (
		<AppBar elevation={+elevation} position='relative'>
			<div className='flex justify-between flex-grow align-center'>
				{titleEl ? titleEl : <Typography variant={titleVariant}>{title}</Typography>}
				{actionBtn}
			</div>
		</AppBar>
	);
};

Panel.Header = PanelHeader;
