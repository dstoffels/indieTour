import { Stack, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import useDates from 'hooks/useDates.js';
import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteDatePopover from '../DeleteDatePopover/DeleteDatePopover.jsx';
import './DateListItem.css';

const DateListItem = ({ tourdate, i, activetour, forTour = null }) => {
	const { activeDate, setActiveDate, deleteDate } = useDates();

	const navigate = useNavigate();

	const handleClick = e => {
		setActiveDate(i);
		navigate('/dates');
	};

	const activeColor = tourdate.id == activeDate?.id ? 'primary' : '';

	const confirmedClass = tourdate.is_confirmed ? 'confirmed-date' : 'unconfirmed-date';

	return (
		<PanelListItem onClick={handleClick}>
			<Stack
				className={confirmedClass}
				direction='row'
				alignItems='center'
				spacing={3}
				justifyContent='space-between'>
				<Stack textAlign='center'>
					<Typography color={activeColor} variant='caption'>
						{moment(tourdate.date).format('ddd')}
					</Typography>
					<Typography color={activeColor} variant='body1'>
						{moment(tourdate.date).format('DD MMM')}
					</Typography>
				</Stack>
				<Typography color={activeColor}>{tourdate.title}</Typography>
				{forTour && <DeleteDatePopover date={tourdate} small deleteDate={deleteDate} />}
			</Stack>
		</PanelListItem>
	);
};

export default DateListItem;
