import { List } from '@mui/material';
import React from 'react';
import Panel from '../Panel/Panel.jsx';

const ListPanel = ({ title, children, actionBtn, size = 6, elevation = 0 }) => {
	return (
		<Panel title={title} actionBtn={actionBtn} size={size} elevation={elevation}>
			<List subheader={<li />}>{children}</List>
		</Panel>
	);
};

export default ListPanel;
