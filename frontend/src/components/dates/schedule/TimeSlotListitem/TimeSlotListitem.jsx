import { AccessTime, AirportShuttle, Done, Flight, PersonPin } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import useOutsideClick from 'hooks/useOutsideClick.js';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import TimeslotForm from '../TimeslotForm/TimeslotForm.jsx';

const TimeSlotListitem = ({ timeslot, open }) => {
	let { start_time, end_time, description, start_location, end_location, type } = timeslot;
	start_time = start_time ? moment(start_time, 'HH:mm').format('HH:mm') : '';
	end_time = end_time ? moment(end_time, 'HH:mm').format('HH:mm') : '';

	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		!start_time && setIsOpen(true);
	}, [isOpen]);

	const typeIcons = [<AccessTime />, <AirportShuttle />, <Flight />, <PersonPin />];
	const icon = typeIcons[timeslot.type_options.indexOf(type)];

	const toggleOpen = () => setIsOpen(!open);
	const handleClose = () => setIsOpen(false);

	const ref = useRef(null);
	const [handleCanClose, handlePreventClose] = useOutsideClick(ref, handleClose);

	return (
		<div ref={ref}>
			{isOpen ? (
				<TimeslotForm
					timeslot={timeslot}
					handleClose={handleClose}
					handleCanClose={handleCanClose}
					handlePreventClose={handlePreventClose}
				/>
			) : (
				<PanelListItem onClick={toggleOpen}>
					<Stack direction='row' spacing={2}>
						{icon}
						<Typography variant='body2'>
							{start_time || 'Click to edit'}
							{timeslot.end_time && ` - ${end_time}`}
						</Typography>
						<Typography>{timeslot.description}</Typography>
					</Stack>
				</PanelListItem>
			)}
		</div>
	);
};

export default TimeSlotListitem;
