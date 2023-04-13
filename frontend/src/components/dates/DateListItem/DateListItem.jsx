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
		navigate(`/dates/${tourdate.id}`);
	};

	const activeColor = tourdate.id == activeDate?.id ? 'primary' : '';

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
					<Typography color={activeColor} variant='caption'>
						{moment(tourdate.date).format('ddd')}
					</Typography>
					<Typography color={activeColor} variant='body1'>
						{moment(tourdate.date).format('DD MMM')}
					</Typography>
				</Stack>
				<Stack textAlign='right'>
					<Typography color={activeColor}>{tourdate.title}</Typography>
					<Typography variant='caption' color={activeColor}>
						{tourdate.place?.political_address}
					</Typography>
				</Stack>
			</Stack>
		</PanelListItem>
	);
};

export default DateListItem;
