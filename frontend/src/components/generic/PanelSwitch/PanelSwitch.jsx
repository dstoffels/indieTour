import React from 'react';
import SideStack from '../SideStack/SideStack.jsx';
import { Switch, Typography } from '@mui/material';
import useHoverable from '../../../styles/useHoverable.js';

const PanelSwitch = ({ checked, onClick, label, show = null }) => {
	const classes = useHoverable();
	return (
		show && (
			<SideStack onClick={onClick} padding={2} className={classes.hoverable}>
				<Typography color='primary' variant='overline'>
					{label}
				</Typography>
				<Switch checked={checked} />
			</SideStack>
		)
	);
};

export default PanelSwitch;
