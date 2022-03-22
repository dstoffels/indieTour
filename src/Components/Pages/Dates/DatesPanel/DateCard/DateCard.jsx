import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import DateBlock from './DateBlock.jsx';

const DateCard = ({ tourDate, selectedDate, setSelectedDate }) => {
	const handleClick = () => {
		console.log(`clicked: ${tourDate.date}`);
	};

	const isActive = tourDate.date === selectedDate;
	const active = isActive ? ' (active)' : '';

	return (
		<Card>
			<CardActionArea onClick={handleClick}>
				<CardContent className='p-2 flex-between'>
					<DateBlock date={tourDate.date} />
					<div className='w-100 ps-3'>
						<Typography variant=''>{tourDate.title}</Typography>
						<Typography>{tourDate.location}</Typography>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default DateCard;
