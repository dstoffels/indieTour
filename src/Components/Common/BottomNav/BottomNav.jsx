import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { DateRangeOutlined, PaidOutlined, TodayOutlined } from '@mui/icons-material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { MoreHoriz } from '@mui/icons-material';

import './BottomNav.css';
import useUser from '../../../hooks/useUser.js';

const BottomNav = props => {
	const [value, setValue] = useState('today');

	return (
		<Paper className='bottom-nav-wrapper' elevation={5}>
			<BottomNavigation
				value={value}
				onChange={(e, newValue) => {
					setValue(newValue);
				}}
				className='bottom-nav'
				showLabels>
				<BottomNavigationAction label='Today' value='today' icon={<TodayOutlined />} />
				<BottomNavigationAction label='Dates' value='dates' icon={<DateRangeOutlined />} />
				<BottomNavigationAction label='Reports' value='reports' icon={<PaidOutlined />} />
				<BottomNavigationAction label='Menu' value='menu' icon={<MoreHoriz />} />
			</BottomNavigation>
		</Paper>
	);
};

export default BottomNav;
