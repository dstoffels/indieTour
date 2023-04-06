import { AppBar, Toolbar } from '@mui/material';
import NavLink from 'pages/NavLink/NavLink.jsx';
import React from 'react';

const PanelNav = ({}) => {
	return (
		<AppBar>
			<Toolbar>
				<NavLink>Band</NavLink>
				<NavLink>Tour</NavLink>
				<NavLink>Dates</NavLink>
				{/* <NavLink>Dates</NavLink> */}
			</Toolbar>
		</AppBar>
	);
};

export default PanelNav;
