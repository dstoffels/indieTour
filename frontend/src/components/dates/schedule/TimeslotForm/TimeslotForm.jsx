import { ArrowCircleUp, ArrowDropUp, Done } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import LabeledSwitch from 'components/generic/LabeledSwitch/LabeledSwitch.jsx';
import LocationEditField from 'components/generic/LocationEditField/LocationEditField.jsx';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';
import MenuButton from 'components/menus/MenuButton/MenuButton.jsx';
import useAPI from 'hooks/useAPI.js';
import useDates from 'hooks/useDates.js';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import moment from 'moment';
import React, { useRef, useState } from 'react';

const TimeslotForm = ({ timeslot, handleClose, handleCanClose, handlePreventClose }) => {
	const { updateTimeslot, deleteTimeslot } = useDates();

	const handleUpdate = (data) => {
		updateTimeslot(timeslot.id, data);
	};

	const handleDelete = () => {
		deleteTimeslot(timeslot.id);
	};

	const { type } = timeslot;
	const setForm = () => {
		switch (type) {
			case 'Travel':
				return <TravelForm timeslot={timeslot} handleUpdate={handleUpdate} />;
			// case 'Flight':
			// 	return <FlightForm timeslot={timeslot} handleUpdate={handleUpdate} />;
			default:
				return <EventForm timeslot={timeslot} handleUpdate={handleUpdate} />;
		}
	};

	const handleType = (type) => {
		updateTimeslot(timeslot.id, { type });
	};

	// useEscKey(handleClose);

	return (
		<>
			<Stack spacing={1}>
				{setForm()}

				<Box padding={2} display='flex' justifyContent='space-between'>
					<MenuButton
						onOpen={handlePreventClose}
						onClose={handleCanClose}
						onClick={handleType}
						items={timeslot.type_options}
						btnTxt={timeslot.type}
						variant='contained'
					/>
					<Box>
						<Tooltip title='Close'>
							<IconButton size='large' color='success' onClick={handleClose}>
								<ArrowCircleUp />
							</IconButton>
						</Tooltip>
						<DeletePopoverBasic
							onOpen={handlePreventClose}
							onClose={handleCanClose}
							small
							onDelete={handleDelete}
						>
							Delete Timeslot?
						</DeletePopoverBasic>
					</Box>
				</Box>
			</Stack>
			<Divider />
		</>
	);
};

export default TimeslotForm;

const EventForm = ({ handleUpdate, timeslot }) => {
	let {
		start_time,
		end_time,
		end_location,
		description,
		start_after_midnight,
		end_after_midnight,
	} = timeslot;

	console.log(timeslot);

	start_time = start_time ? moment(start_time, 'HH:mm').format('HH:mm') : '';
	end_time = end_time ? moment(end_time, 'HH:mm').format('HH:mm') : '';

	const handleSwitch = (e) => {
		handleUpdate({ [e.target.name]: e.target.checked });
	};

	return (
		<Box alignItems='center'>
			<Stack direction='row'>
				<EditField
					onSubmit={handleUpdate}
					type='time'
					initValue={start_time}
					label='Start Time*'
					name='start_time'
				/>
				<LabeledSwitch
					label='Next Day'
					checked={start_after_midnight}
					name='start_after_midnight'
					onChange={handleSwitch}
				/>
			</Stack>
			<Divider />
			<Stack direction='row'>
				<EditField
					onSubmit={handleUpdate}
					type='time'
					initValue={end_time}
					label='End Time'
					name='end_time'
				/>
				<LabeledSwitch
					label='Next Day'
					checked={end_after_midnight}
					name='end_after_midnight'
					onChange={handleSwitch}
				/>
			</Stack>
			<EditField
				onSubmit={handleUpdate}
				initValue={description}
				label='Description'
				name='description'
			/>
			<Divider />
			<LocationEditField
				initValue={end_location}
				onSubmit={(end_location) => handleUpdate({ end_location })}
			/>
		</Box>
	);
};
TimeslotForm.EventForm = EventForm;

const TravelForm = ({ timeslot, handleUpdate }) => {
	const { start_location, end_location, description, start_time, end_time } = timeslot;

	const api = useAPI();
	const handleDepart = () => {
		api.gapi.maps.directions.get(start_location.place_id, end_location.place_id, end_time, (data) =>
			console.log(data),
		);
	};

	return (
		<div>
			<LocationEditField
				label='Origin'
				initValue={timeslot.start_location}
				onSubmit={(start_location) => handleUpdate({ start_location })}
			/>
			<LocationEditField
				label='Destination'
				initValue={timeslot.end_location}
				onSubmit={(end_location) => handleUpdate({ end_location })}
			/>
			<EditField
				label='Departure Time'
				type='time'
				initValue={moment(timeslot.end_time, 'HH:mm').format('HH:mm')}
				name='start_time'
				onSubmit={handleUpdate}
			/>
			<EditField
				label='Arrival Time'
				type='time'
				initValue={moment(timeslot.end_time, 'HH:mm').format('HH:mm')}
				name='end_time'
				onSubmit={handleUpdate}
			/>
			{/* <Typography padding={2} color='primary' variant='overline'>
				Depart
			</Typography>
			<Button onClick={handleDepart}>Calculate</Button>
			<Typography paddingX={2}>time</Typography> */}
		</div>
	);
};
TimeslotForm.TravelForm = TravelForm;

const FlightForm = ({ handleUpdate }) => {
	return <div>Flight Form</div>;
};
TimeslotForm.FlightForm = FlightForm;

const MeetingForm = ({ handleUpdate }) => {
	return <div></div>;
};
TimeslotForm.MeetingForm = MeetingForm;
