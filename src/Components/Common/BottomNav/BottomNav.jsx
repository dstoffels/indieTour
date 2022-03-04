import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { DateRangeOutlined, PaidOutlined, TodayOutlined } from '@mui/icons-material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { MoreHoriz } from '@mui/icons-material';

import './BottomNav.css';

const BottomNav = props => {
	const [value, setValue] = useState();

	return (
		<Paper className='bottom-nav-wrapper' elevation={5}>
			<BottomNavigation
				value={value}
				onChange={(e, newValue) => {
					setValue(newValue);
				}}
				className='bottom-nav'
				showLabels>
				<BottomNavigationAction label='Today' icon={<TodayOutlined />} />
				<BottomNavigationAction label='Dates' icon={<DateRangeOutlined />} />
				<BottomNavigationAction label='Reports' icon={<PaidOutlined />} />
				<BottomNavigationAction label='Menu' icon={<MoreHoriz />} />
			</BottomNavigation>
		</Paper>
	);
};

export default BottomNav;
