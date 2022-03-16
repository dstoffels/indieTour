import React, { memo, useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
	DateRange,
	DateRangeOutlined,
	FactCheck,
	FactCheckOutlined,
	InsertInvitation,
	InsertInvitationOutlined,
	Settings,
	SettingsOutlined,
} from '@mui/icons-material';

import './BottomNav.css';
import { BOOKING, CONSOLE, DATES, TODAY } from 'constants/routes.js';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNav = memo(props => {
	const navigate = useNavigate();
	const location = useLocation();

	const [value, setValue] = useState('');

	useEffect(() => {
		setValue(location.pathname);
	}, [location]);

	const handleChange = (e, newValue) => {
		setValue(newValue);
		navigate(newValue);
	};

	return (
		<Paper className='bottom-nav-wrapper' elevation={5}>
			<BottomNavigation value={value} onChange={handleChange} showLabels>
				<BottomNavigationAction
					label='Today'
					value={TODAY}
					icon={
						value === TODAY ? (
							<InsertInvitation color='inherit' />
						) : (
							<InsertInvitationOutlined color='inherit' />
						)
					}
				/>
				<BottomNavigationAction
					label='Dates'
					value={DATES}
					icon={value === DATES ? <DateRange /> : <DateRangeOutlined />}
				/>
				<BottomNavigationAction
					label='Booking'
					value={BOOKING}
					icon={value === BOOKING ? <FactCheck /> : <FactCheckOutlined />}
				/>
				<BottomNavigationAction
					label='Console'
					value={CONSOLE}
					icon={value === CONSOLE ? <Settings /> : <SettingsOutlined />}
				/>
			</BottomNavigation>
		</Paper>
	);
});

export default BottomNav;
