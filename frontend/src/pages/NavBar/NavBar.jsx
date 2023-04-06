import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import UserMenu from 'menus/UserMenu/UserMenu.jsx';
import NavLink from 'pages/NavLink/NavLink.jsx';
import { useGlobalState } from 'context/GlobalStateContext.js';
import BandMenu from 'components/menus/BandMenu/BandMenu.jsx';
import TourMenu from 'components/menus/TourMenu/TourMenu.jsx';

const Navbar = ({ select }) => {
	const { activeBand, activeTour, activeDate } = useGlobalState();
	return (
		<AppBar position='relative'>
			<Toolbar>
				<div className='flex justify-between flex-grow align-center'>
					<nav className='flex'>
						{/* {activeBand && <NavLink to='/'>{activeBand.name}</NavLink>} */}
						<BandMenu />
						{activeBand && <TourMenu />}
					</nav>
					{/* {select} */}
					<UserMenu />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
