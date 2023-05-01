import { AccessTime, AirportShuttle, Done, Flight, PersonPin } from '@mui/icons-material';
import { Box, Collapse, Divider, IconButton, Stack, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import useOutsideClick from 'hooks/useOutsideClick.js';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import TimeslotForm from '../TimeslotForm/TimeslotForm.jsx';

const TimeSlotListitem = ({ timeslot, open }) => {
	let { type, start_time, end_time, description, start_location, end_location } = timeslot;
	start_time = start_time ? moment(start_time, 'HH:mm').format('HH:mm') : '';
	end_time = end_time ? moment(end_time, 'HH:mm').format('HH:mm') : '';

	const [isOpen, setIsOpen] = useState(false);

	const typeIcons = [<AccessTime />, <AirportShuttle />, <Flight />, <PersonPin />];
	const icon = typeIcons[timeslot.type_options.indexOf(type)];

	const toggleOpen = () => setIsOpen(!open);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<Collapse in={isOpen} timeout={250}>
				<TimeslotForm timeslot={timeslot} handleClose={handleClose} />
			</Collapse>
			<Collapse in={!isOpen} timeout={250}>
				<PanelListItem onClick={!isOpen ? toggleOpen : null}>
					<Stack direction='row' spacing={2}>
						{icon}
						<Typography variant='body2'>
							{start_time || 'Click to edit'}
							{timeslot.end_time && ` - ${end_time}`}
						</Typography>
						<Typography>{timeslot.description}</Typography>
					</Stack>
				</PanelListItem>
			</Collapse>
		</>
	);
};

export default TimeSlotListitem;
