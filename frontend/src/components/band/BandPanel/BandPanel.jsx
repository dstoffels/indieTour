import { AppBar, Paper, Toolbar, Typography } from '@mui/material';
import useStore from 'hooks/useStore.js';
import React, { useState } from 'react';
import withActiveBand from 'utils/withActiveBand.js';
import withAuth from 'utils/withAuth.js';
import BandInfo from '../BandInfo/BandInfo.jsx';
import BandMenu from '../BandMenu/BandMenu.jsx';

const BandPanel = ({}) => {
	return (
		<Paper>
			<AppBar position='relative'>
				<Toolbar variant='dense'>
					<div className='flex-grow'>
						<BandMenu />
					</div>
					{/* <Typography variant='h6'>Band Info</Typography> */}
				</Toolbar>
			</AppBar>
			<BandInfo />
		</Paper>
	);
};

export default withActiveBand(BandPanel);
