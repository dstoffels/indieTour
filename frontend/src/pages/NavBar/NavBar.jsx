import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Typography } from '@mui/material';
import UserMenu from 'menus/UserMenu/UserMenu.jsx';
import NavLink from 'pages/NavLink/NavLink.jsx';
import { useGlobalState } from 'context/GlobalStateContext.js';
import BandMenu from 'components/menus/BandMenu/BandMenu.jsx';
import TourMenu from 'components/menus/TourMenu/TourMenu.jsx';
import useAuth from 'hooks/useAuth.js';
import LoginBtnForm from 'components/auth/LoginBtnForm/LoginBtnForm.jsx';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import { useNavigate } from 'react-router-dom';
import NavBtn from 'components/generic/NavBtn/NavBtn.jsx';

const Navbar = ({ select }) => {
	const { activeBand, activeTour, activeDate } = useGlobalState();
	const { user, withAuth } = useAuth();

	const navigate = useNavigate();

	return (
		<AppBar position='relative' sx={{ mb: 1 }}>
			<Toolbar>
				<SideStack>
					{withAuth(
						<div>
							<BandMenu />
							{activeBand && <TourMenu />}
						</div>,
						<Typography variant='h5'>Welcome to indietour!</Typography>,
					)}
					<nav className='flex'>
						<NavBtn to='/today'>Today</NavBtn>
						<NavBtn to='/tour'>Tour</NavBtn>
						{/* <NavBtn to='/booking'>Booking</NavBtn> */}
					</nav>
					{withAuth(<UserMenu />, <LoginBtnForm />)}
				</SideStack>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
