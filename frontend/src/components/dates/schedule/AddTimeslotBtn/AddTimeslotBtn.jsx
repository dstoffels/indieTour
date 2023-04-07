import { Add } from '@mui/icons-material';
import { Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import useDates from 'hooks/useDates.js';
import React from 'react';

const AddTimeslotBtn = ({}) => {
	const { addTimeslot } = useDates();

	const handleClick = () => addTimeslot({});

	return (
		<PanelListItem onClick={handleClick}>
			<Typography color='primary'>
				<Add /> Add
			</Typography>
		</PanelListItem>
	);
};

export default AddTimeslotBtn;
