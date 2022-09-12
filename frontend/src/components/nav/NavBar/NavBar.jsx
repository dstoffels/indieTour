import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import UserMenu from 'components/nav/UserMenu/UserMenu.jsx';
import TourMenu from '../TourMenu/TourMenu.jsx';

const Navbar = () => {
	return (
		<AppBar position='fixed'>
			<Toolbar>
				<div className='flex-grow'>
					<TourMenu />
				</div>
				<UserMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
