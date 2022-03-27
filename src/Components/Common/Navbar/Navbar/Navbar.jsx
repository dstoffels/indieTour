import React from 'react';
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import AccountMenu from '../AccountMenu/AccountMenu.jsx';
import TourSelector from 'Components/Pages/Console/Tours/TourSelector/TourSelector.jsx';
import Logo from 'images/indietour-logo.png';
import useWindow from 'hooks/useWindow.js';
import { Dashboard, DashboardOutlined, DateRange, DateRangeOutlined } from '@mui/icons-material';
import NavBtn from './NavBtn.jsx';
import { CONSOLE, DATES } from 'constants/routes.js';
import useTours from 'Components/Pages/Console/Tours/useTours.js';

const Navbar = props => {
	const { isMobile } = useWindow();
	const { activeTour } = useTours();

	return (
		<AppBar position='sticky' elevation={2}>
			<Toolbar className='w-100 flex-between'>
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
