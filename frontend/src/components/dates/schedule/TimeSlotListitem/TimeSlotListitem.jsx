import { AccessTime, AirportShuttle, Done, Flight, PersonPin } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import LocationEditField from 'components/generic/LocationEditField/LocationEditField.jsx';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';
import MenuButton from 'components/menus/MenuButton/MenuButton.jsx';
import useDates from 'hooks/useDates.js';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import TimeslotForm from '../TimeslotForm/TimeslotForm.jsx';

const TimeSlotListitem = ({ timeslot, open }) => {
	let { start_time, end_time, description, start_location, end_location, type } = timeslot;
	start_time = start_time ? moment(start_time, 'HH:mm').format('HH:mm') : '';
	end_time = end_time ? moment(end_time, 'HH:mm').format('HH:mm') : '';

	const { updateTimeslot, deleteTimeslot } = useDates();

	const [isOpen, setIsOpen] = useState(open);

	const typeIcons = [<AccessTime />, <AirportShuttle />, <Flight />, <PersonPin />];
	const icon = typeIcons[timeslot.type_options.indexOf(type)];

	const handleType = (type) => {
		updateTimeslot(timeslot.id, { type });
	};

	const handleUpdate = (data) => {
		updateTimeslot(timeslot.id, data);
	};

	const handleDelete = () => {
		deleteTimeslot(timeslot.id);
	};

	const toggleOpen = () => setIsOpen(!open);
	const handleClose = () => setIsOpen(false);

	const ref = useRef(null);
	const [handleCanClose, handlePreventClose] = useOutsideClick(ref, handleClose);

	useEscKey(handleClose);

	const forTravel = ['Flight', 'Travel'].includes(type);

	return (
		<div ref={ref}>
			{isOpen ? (
				<TimeslotForm timeslot={timeslot} />
			) : (
				// <>
				// 	<Stack spacing={1}>
				// 		<Stack direction='row'>
				// 			<EditField
				// 				onSubmit={handleUpdate}
				// 				type='time'
				// 				initValue={start_time}
				// 				label='Start Time'
				// 				name='start_time'
				// 			/>
				// 			<EditField
				// 				onSubmit={handleUpdate}
				// 				type='time'
				// 				initValue={end_time}
				// 				label='End Time'
				// 				name='end_time'
				// 			/>
				// 		</Stack>
				// 		<EditField
				// 			onSubmit={handleUpdate}
				// 			initValue={description}
				// 			label='Description'
				// 			name='description'
				// 		/>
				// 		<LocationEditField
				// 			initValue={timeslot.start_location}
				// 			label={forTravel ? 'Start Location' : 'Location'}
				// 			onSubmit={handleUpdate}
				// 		/>
				// 		{forTravel && (
				// 			<LocationEditField
				// 				initValue={timeslot.start_location}
				// 				onSubmit={handleUpdate}
				// 				label='End Location'
				// 			/>
				// 		)}
				// 		<Box padding={2} display='flex' justifyContent='space-between'>
				// 			<MenuButton
				// 				onOpen={handlePreventClose}
				// 				onClose={handleCanClose}
				// 				onClick={handleType}
				// 				items={timeslot.type_options}
				// 				btnTxt={timeslot.type}
				// 				variant='contained'
				// 			/>
				// 			<Box>
				// 				<IconButton size='large' color='success' onClick={handleClose}>
				// 					<Done />
				// 				</IconButton>
				// 				<DeletePopoverBasic
				// 					onOpen={handlePreventClose}
				// 					onClose={handleCanClose}
				// 					small
				// 					onDelete={handleDelete}
				// 				>
				// 					Delete Timeslot?
				// 				</DeletePopoverBasic>
				// 			</Box>
				// 		</Box>
				// 	</Stack>
				// 	<Divider />
				// </>
				<PanelListItem onClick={toggleOpen}>
					<Stack direction='row' spacing={2}>
						{icon}
						<Typography variant='body2'>
							{!start_time && 'Click to edit'}
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
