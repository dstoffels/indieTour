import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import UserMenu from 'components/nav/UserMenu/UserMenu.jsx';
import TourMenu from '../TourSelect/TourSelect.jsx';
import { Link } from 'react-router-dom';
import NavLink from 'components/NavLink/NavLink.jsx';

const Navbar = () => {
	return (
		<AppBar position='fixed'>
			<Toolbar>
				<div className='flex justify-between flex-grow align-center'>
					<TourMenu />
					<nav>
						<NavLink to='/tour'>TOUR</NavLink>
						<NavLink to='/'>BAND</NavLink>
					</nav>
					<UserMenu />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
