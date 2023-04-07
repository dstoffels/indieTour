import {
	AppBar,
	BottomNavigation,
	BottomNavigationAction,
	Grid,
	Paper,
	Toolbar,
	Typography,
} from '@mui/material';
import Navbar from 'pages/NavBar/NavBar.jsx';
import React, { useState } from 'react';
import './Page.css';
import NavLink from 'pages/NavLink/NavLink.jsx';
import { AirportShuttle, DateRange, EventAvailable } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const Page = ({ children }) => (
	<Grid container spacing={1} paddingX={1}>
		{children}
	</Grid>
);

export default Page;

const PageHeader = ({ children }) => {
	const { pathname } = useLocation();
	const index = pathname === '/tour' ? 0 : pathname.includes('/dates') ? 1 : 0;

	const [value, setValue] = useState(index);

	const navigate = useNavigate();

	return (
		<BottomNavigation showLabels value={value} onChange={(e, val) => setValue(val)}>
			<BottomNavigationAction
				onClick={() => navigate('/tour')}
				label='Tour'
				icon={<AirportShuttle />}
			/>
			<BottomNavigationAction
				onClick={() => navigate('/dates')}
				label='Dates'
				icon={<DateRange />}
			/>
			<BottomNavigationAction
				onClick={() => navigate('/dates')}
				label='Booking'
				icon={<EventAvailable />}
			/>
		</BottomNavigation>
	);
};

Page.Header = PageHeader;

const PageSplitBody = ({ children }) => (
	<Grid height='100%' container spacing={1} padding={1} justifyContent='space-between'>
		{children}
	</Grid>
);

Page.SplitBody = PageSplitBody;
