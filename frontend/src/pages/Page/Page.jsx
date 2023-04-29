import { BottomNavigation, BottomNavigationAction, Grid } from '@mui/material';
import React, { useState } from 'react';
import { AirportShuttle, DateRange, EventAvailable } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import useWindow from 'hooks/useWindow.js';
import { makeStyles } from '@mui/styles';
import { useNavbar } from 'context/GlobalStateContext.js';

const useStyles = makeStyles((theme) => ({
	page: {
		maxHeight: ({ windowSize, navbarHeight }) => windowSize.height - navbarHeight,
		overflow: 'hidden',
	},
}));

const Page = ({ children }) => {
	const windowSize = useWindow();
	const { navbarHeight } = useNavbar();
	const classes = useStyles({ windowSize, navbarHeight });

	return (
		<Grid container spacing={1} padding={1} className={classes.page}>
			{children}
		</Grid>
	);
};

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
