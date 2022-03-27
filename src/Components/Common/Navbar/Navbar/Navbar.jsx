import React from 'react';
import { AppBar, Stack, Toolbar } from '@mui/material';
import AccountMenu from '../AccountMenu/AccountMenu.jsx';
import TourSelector from 'Components/Pages/Console/Tours/TourSelector/TourSelector.jsx';
import Logo from 'images/indietour-logo.png';
import useWindow from 'hooks/useWindow.js';
import { Dashboard, DashboardOutlined, DateRange, DateRangeOutlined } from '@mui/icons-material';
import NavBtn from './NavBtn.jsx';
import { CONSOLE, DATES, HOME, PASSWORD, WAITING_ROOM } from 'constants/routes.js';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
	const { isMobile } = useWindow();
	const { activeTour } = useTours();
	const location = useLocation();

	const isVerified =
		location.pathname === HOME ||
		location.pathname === WAITING_ROOM ||
		location.pathname === PASSWORD;

	return (
		<AppBar position='sticky' elevation={2}>
			<Toolbar className={`w-100 flex-${isMobile && isVerified ? 'end' : 'between'}`}>
				{!isMobile && (
					<>
						<img width='100px' src={Logo} className='me-5' />
						<Stack direction='row' spacing={4}>
							<NavBtn
								label='Dates'
								page={DATES}
								activeIcon={<DateRange />}
								inactiveIcon={<DateRangeOutlined />}
								disabled={!activeTour}
							/>
							<NavBtn
								label='Tours'
								page={CONSOLE}
								activeIcon={<Dashboard />}
								inactiveIcon={<DashboardOutlined />}
							/>
						</Stack>
					</>
				)}
				<TourSelector />
				<AccountMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
