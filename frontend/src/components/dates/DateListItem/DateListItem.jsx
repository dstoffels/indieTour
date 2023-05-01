import { Stack, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DateListItem.css';
import useDates from 'hooks/useDates.js';

const DateListItem = ({ tourdate }) => {
	const { activeDate } = useDates();

	const navigate = useNavigate();

	const handleClick = (e) => {
		navigate(`/tour?date=${tourdate.id}`);
	};

	// const confirmedClass = tourdate.is_show_day ? 'confirmed-date' : 'unconfirmed-date';

	return (
		<PanelListItem active={activeDate?.id === tourdate?.id} onClick={handleClick}>
			<Stack
				// className={confirmedClass}
				direction='row'
				alignItems='center'
				spacing={3}
				justifyContent='space-between'
			>
				<Stack textAlign='center'>
					<Typography variant='caption'>{moment(tourdate.date).format('ddd')}</Typography>
					<Typography variant='body1'>{moment(tourdate.date).format('DD MMM')}</Typography>
				</Stack>
				<Stack textAlign='right'>
					<Typography>{tourdate.title}</Typography>
					<Typography variant='caption'>{tourdate.place?.political_address}</Typography>
				</Stack>
			</Stack>
		</PanelListItem>
	);
};

export default DateListItem;
