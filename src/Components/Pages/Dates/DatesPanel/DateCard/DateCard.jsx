import { Card, CardActionArea, CardContent, Collapse, Stack, Typography } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useDates from '../../useDates.js';
import DateBlock from './DateBlock.jsx';
import DirectionsBtn from './DirectionsBtn.jsx';

const truncLocation = loc =>
	loc !== '' &&
	loc
		.split(',')
		.filter((seg, i) => !/\d/.test(seg) || i !== 0)
		.concat();

const DateCard = ({ tourDate }) => {
	const { selectTourDate, deselectTourDate, showPastDates, activeDate, unsavedChanges } =
		useDates();

	const { openDeleteModal, modalKeys } = useModal();

	const isActive = tourDate === activeDate;

	const handleClick = () => {
		const toggleActiveTourDate = () => (isActive ? deselectTourDate() : selectTourDate(tourDate));
		unsavedChanges ? openDeleteModal(modalKeys.discardDateChanges) : toggleActiveTourDate();
	};

	const getIsPastDate = () => {
		const date = new Date(tourDate.date);
		const today = new Date();
		return date < today && date.toDateString() !== today.toDateString();
	};

	const fontStyle = getIsPastDate() ? 'italic' : '';
	const color = tourDate.isConfirmed ? '' : 'text.disabled';

	return (
		<Collapse in={!getIsPastDate() || showPastDates}>
			<Card className='flex-between' sx={{ bgcolor: isActive && 'action.selected' }}>
				<CardActionArea onClick={handleClick}>
					<CardContent className='p-2 flex-between'>
						<DateBlock fontStyle={fontStyle} color={color} date={tourDate.date} />
						<Stack className='w-100 ps-3'>
							<Typography fontStyle={fontStyle} color={color} variant='body1' fontWeight={600}>
								{tourDate.title}
							</Typography>
							<Typography fontStyle={fontStyle} color={color} variant='caption'>
								{truncLocation(tourDate.location)}
							</Typography>
						</Stack>
					</CardContent>
				</CardActionArea>
				<DirectionsBtn location={tourDate.location} />
			</Card>
		</Collapse>
	);
};

export default DateCard;