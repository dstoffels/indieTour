import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import AccoutMenu from '../AccountMenu/AccountMenu.jsx';
import TourSelector from '../TourSelector/TourSelector.jsx';

import './Navbar.css';

const Navbar = props => {
	return (
		<AppBar position='sticky' className='main-nav'>
			<Toolbar className='text-white d-flex justify-content-between'>
				<TourSelector />
				<AccoutMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
