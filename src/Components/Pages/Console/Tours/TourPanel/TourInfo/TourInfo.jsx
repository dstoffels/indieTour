import { Stack, Typography } from '@mui/material';
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
			{/* <AddDateModalBtn /> */}
		</>
	);

	if (activeTour) {
		const { name, startDate, endDate, numDates, notes } = activeTour;

		return (
			<Panel.Section title='Active Tour' bottomActions={actions}>
				<Stack spacing={1}>
					<Typography color='primary' variant='h6' marginBottom={1}>
						{name}
					</Typography>

					{Boolean(startDate) && (
						<div>
							<Typography color='primary' variant='caption'>
								Start Date
							</Typography>
							<Typography component='div' variant='body2'>
								{startDate}
							</Typography>
						</div>
					)}

					{Boolean(endDate) && (
						<div>
							<Typography color='primary' variant='caption'>
								End Date
							</Typography>

							<Typography component='div' variant='body2'>
								{endDate}
							</Typography>
						</div>
					)}

					<div>
						<Typography color='primary' variant='caption'>
							Total dates
						</Typography>
						<Typography component='div' variant='body2'>
							{numDates}
						</Typography>
					</div>

					<div>
						<Typography color='primary' variant='caption'>
							Notes
						</Typography>
						<Typography marginBottom={1} variant='body1'>
							{notes}
						</Typography>
					</div>
				</Stack>
			</Panel.Section>
		);
	}
	return <NewTourModalBtn />;
};

export default TourInfo;
