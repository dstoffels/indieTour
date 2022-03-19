import { Add } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import AddDateModalBtn from 'Components/Pages/Dates/AddDateModal/AddDateModalBtn.jsx';
import React from 'react';
import EditTourModalBtn from '../../EditTourModal/EditTourModalBtn.jsx';
import NewTourModalBtn from '../../NewTourModal/NewTourModalBtn.jsx';
import useTours from '../../useTours.js';

const TourInfo = props => {
	const { activeTour } = useTours();

	const actions = (
		<>
			<EditTourModalBtn />
			<AddDateModalBtn />
		</>
	);

	if (activeTour) {
		const { name, startDate, endDate, numDates, notes } = activeTour;

		return (
			<Panel.Section title='Active Tour' bottomActions={actions}>
				<Typography color='primary' variant='h5' marginBottom={3}>
					{name}
				</Typography>
				<Typography color='primary' variant='caption'>
					Notes
				</Typography>
				<Typography marginBottom={1} variant='body1'>
					{notes}
				</Typography>
				<Typography color='primary' variant='caption'>
					Dates
				</Typography>
				{Boolean(startDate) && (
					<Typography component='div' variant='body2'>
						Start date: {startDate}
					</Typography>
				)}

				{Boolean(endDate) && (
					<Typography component='div' variant='body2'>
						End date: {endDate}{' '}
					</Typography>
				)}
				<Typography component='div' variant='body2'>
					Total dates: {numDates}{' '}
				</Typography>
			</Panel.Section>
		);
	}
	return <NewTourModalBtn />;
};

export default TourInfo;
