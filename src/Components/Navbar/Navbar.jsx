import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './Navbar.css';
import LoginBtn from '../Auth/LoginBtn/LoginBtn.jsx';

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
