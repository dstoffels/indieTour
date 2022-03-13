import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import AccountMenu from '../AccountMenu/AccountMenu.jsx';
import TourSelector from '../TourSelector/TourSelector.jsx';

import './Navbar.css';

const Navbar = props => {
	return (
		<AppBar position='sticky' className='main-nav'>
			<Toolbar className='text-white d-flex justify-content-between'>
				<TourSelector />
				<AccountMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
