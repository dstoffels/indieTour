import { List } from '@mui/material';
import React from 'react';
import Panel from '../Panel/Panel.jsx';

const ListPanel = ({ title, list, actionBtn, size = 6 }) => {
	return (
		<Panel title={title} actionBtn={actionBtn} size={size}>
			<List subheader={<li />}>{list}</List>
		</Panel>
	);
};

export default ListPanel;
