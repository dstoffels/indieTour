import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import useTours from '../../useTours.js';

const TourInfo = props => {
	const { activeTour } = useTours();

	return (
		<Card elevation={0}>
			<CardContent>
				<Typography variant='h5'>{activeTour.name}</Typography>
				<Typography variant='body1'>{activeTour.notes}</Typography>
			</CardContent>
		</Card>
	);
};

export default TourInfo;
