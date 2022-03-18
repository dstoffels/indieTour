import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import useTours from '../../useTours.js';
import ArchiveTourBtn from './ArchiveTourBtn.jsx';

const TourCard = ({ tour }) => {
	const { selectTour } = useTours();
	const handleClick = () => selectTour(tour);
	return (
		<Card className='d-flex'>
			<CardActionArea onClick={handleClick}>
				<CardContent className='p-2'>
					<Typography>{tour.name}</Typography>
				</CardContent>
			</CardActionArea>
			<ArchiveTourBtn tour={tour} />
		</Card>
	);
};

export default TourCard;
