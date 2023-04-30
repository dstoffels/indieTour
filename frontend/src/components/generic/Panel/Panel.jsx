import { AppBar, Box, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavbar } from 'context/GlobalStateContext.js';
import useWindow from 'hooks/useWindow.js';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	panel: {
		maxHeight: ({ windowSize, navbarHeight }) => windowSize.height - navbarHeight,
		overflow: 'auto',
	},
}));

const Panel = ({
	size,
	title,
	titleEl,
	titleVariant = 'h5',
	actionBtn = null,
	children,
	elevation = 0,
	padding = 0,
	isSubPanel = false,
}) => {
	const windowSize = useWindow();
	const { navbarHeight } = useNavbar();
	const classes = useStyles({ windowSize, navbarHeight });

	return (
		<Grid item xs={12} lg={size}>
			<Paper
				elevation={5 + elevation}
				sx={{ borderRadius: 0 }}
				className={isSubPanel ? '' : classes.panel}
			>
				<Paper elevation={2 + elevation} sx={{ position: 'relative', borderRadius: 0 }}>
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
