import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AccoutMenu from '../AccountMenu/AccountMenu.jsx';

import './Navbar.css';
import TourSelector from '../TourSelector/TourSelector.jsx';

const Navbar = props => {
	return (
		<AppBar position='sticky' className='main-nav'>
			<Toolbar className='text-white justify-content-between'>
				<TourSelector />
				<AccoutMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
