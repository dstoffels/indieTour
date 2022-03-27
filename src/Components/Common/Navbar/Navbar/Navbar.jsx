import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import AccountMenu from '../AccountMenu/AccountMenu.jsx';
import TourSelector from 'Components/Pages/Console/Tours/TourSelector/TourSelector.jsx';

const Navbar = props => {
	return (
		<AppBar position='sticky' color='nav' elevation={0}>
			<Toolbar className='d-flex justify-content-between'>
				<div className='text-center w-100'>
					<TourSelector />
				</div>
				<AccountMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
