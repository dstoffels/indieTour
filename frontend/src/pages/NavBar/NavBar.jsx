import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import UserMenu from 'menus/UserMenu/UserMenu.jsx';
import NavLink from 'pages/NavLink/NavLink.jsx';
import { useGlobalState } from 'context/GlobalStateContext.js';
import BandMenu from 'components/menus/BandMenu/BandMenu.jsx';
import TourMenu from 'components/menus/TourMenu/TourMenu.jsx';
import useAuth from 'hooks/useAuth.js';
import LoginBtnForm from 'components/auth/LoginBtnForm/LoginBtnForm.jsx';

const Navbar = ({ select }) => {
	const { activeBand, activeTour, activeDate } = useGlobalState();
	const { user } = useAuth();

	return (
		<AppBar position='relative' sx={{ mb: 1 }}>
			<Toolbar>
				<div className='flex justify-between flex-grow align-center'>
					<nav className='flex'>
						{user ? (
							<>
								<BandMenu />
								{activeBand && <TourMenu />}
							</>
						) : (
							<Typography variant='h5'>Welcome to indietour!</Typography>
						)}
					</nav>
					<LoginBtnForm />
					{/* <UserMenu /> */}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
