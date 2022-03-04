import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LoginBtn from '../../Auth/LoginBtn/LoginBtn.jsx';

import './Navbar.css';

const Navbar = props => {
	return (
		<AppBar position='sticky' className='main-nav'>
			<Toolbar className='text-white'>
				<Typography variant='h5'>indieTour</Typography>
				<Typography variant='h5' sx={{ flexGrow: 1 }}></Typography>
				<LoginBtn />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
