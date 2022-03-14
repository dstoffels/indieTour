import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import { BOOKING, CONSOLE, DATES, TODAY } from 'constants/routes.js';
import { useNavigate } from 'react-router-dom';

const BottomNav = props => {
	const navigate = useNavigate();

	const { currentPage } = useSelector(state => state.nav);

	const [value, setValue] = useState(currentPage);

	const handleChange = (e, newValue) => {
		setValue(newValue);
		navigate(newValue);
	};

	return (
		<Paper className='bottom-nav-wrapper' elevation={5}>
			<BottomNavigation value={value} onChange={handleChange} className='bottom-nav' showLabels>
				<BottomNavigationAction
					label='Today'
					value={TODAY}
					icon={value === TODAY ? <InsertInvitation /> : <InsertInvitationOutlined />}
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
};

export default BottomNav;
