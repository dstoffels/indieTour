import { Stack, Typography } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
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
					<Panel.Header>{name}</Panel.Header>

					<Panel.Field title='Start Date' show={startDate}>
						{startDate}
					</Panel.Field>

					<Panel.Field title='End Date' show={endDate}>
						{endDate}
					</Panel.Field>

					<Panel.Field title='Total Dates'>{numDates}</Panel.Field>

					<Panel.Field title='Notes' show={notes}>
						{notes}
					</Panel.Field>
				</Stack>
			</Panel.Section>
		);
	}
	return <NewTourModalBtn />;
};

export default TourInfo;
