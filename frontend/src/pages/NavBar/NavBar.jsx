import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import UserMenu from 'menus/UserMenu/UserMenu.jsx';
import NavLink from 'pages/NavLink/NavLink.jsx';

const Navbar = ({ select }) => {
	return (
		<AppBar position='fixed'>
			<Toolbar>
				<div className='flex justify-between flex-grow align-center'>
					<nav>
						<NavLink to='/today'>TODAY</NavLink>
						<NavLink to='/dates'>DATES</NavLink>
						<NavLink to='/tour'>TOUR</NavLink>
						<NavLink to='/'>BAND</NavLink>
					</nav>
					{select}
					<UserMenu />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
