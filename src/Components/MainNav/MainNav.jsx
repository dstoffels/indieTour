import React, { useState } from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import './MainNav.css';

const NAV_ITEMS = [
	{ label: 'Today', icon: <ListAltIcon /> },
	{ label: 'Dates', icon: <CalendarTodayIcon /> },
	{ label: 'Merch', icon: <SellOutlinedIcon /> },
	{ label: 'Expenses', icon: <MonetizationOnOutlinedIcon /> },
];

const MainNav = props => {
	const [activePage, setActivepage] = useState(0);

	const navItems = NAV_ITEMS.map(({ label, icon }) => (
		<BottomNavigationAction key={label} label={label} icon={icon} />
	));
	return (
		<Paper elevation={5} className='main-nav pb-3'>
			<BottomNavigation
				showLabels
				value={activePage}
				onChange={(e, newValue) => setActivepage(newValue)}>
				{navItems}
				<BottomNavigationAction icon={<MenuIcon />} />
			</BottomNavigation>
		</Paper>
	);
};

export default MainNav;
