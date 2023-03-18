import { Stack, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import useDates from 'hooks/useDates.js';
import moment from 'moment';
import React from 'react';

const DateListItem = ({ tourdate, i, activetour }) => {
	const { setActiveDate } = useDates();

	const handleClick = e => {
		setActiveDate(i);
	};

	// const activeColor = tourdate.id == activeDate?.id ? 'primary' : '';

	return (
		<PanelListItem onClick={handleClick}>
			<Stack direction='row' alignItems='center' spacing={3}>
				<Stack textAlign='center'>
					<Typography variant='caption'>{moment(tourdate.date).format('ddd')}</Typography>
					<Typography variant='body1'>{moment(tourdate.date).format('DD MMM')}</Typography>
				</Stack>
				<Typography>{tourdate.title}</Typography>
			</Stack>
		</PanelListItem>
	);
};

export default DateListItem;
