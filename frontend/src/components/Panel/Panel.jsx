import { AppBar, Paper, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Panel = ({ title, headerEl, children }) => {
	return (
		<Paper>
			<AppBar position='relative'>
				<Toolbar className='justify-between' variant='dense'>
					<Typography variant='h6'>{title}</Typography>
					{headerEl}
				</Toolbar>
			</AppBar>
			{children}
		</Paper>
	);
};

export default Panel;
