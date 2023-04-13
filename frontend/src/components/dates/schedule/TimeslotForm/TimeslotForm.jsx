import { ArrowCircleUp, ArrowDropUp, Done } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import LabeledSwitch from 'components/generic/LabeledSwitch/LabeledSwitch.jsx';
import LocationEditField from 'components/generic/LocationEditField/LocationEditField.jsx';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';
import MenuButton from 'components/menus/MenuButton/MenuButton.jsx';
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
			case 'Flight':
				return <FlightForm timeslot={timeslot} handleUpdate={handleUpdate} />;
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
						<IconButton size='large' color='success' onClick={handleClose}>
							<ArrowCircleUp />
						</IconButton>
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
			<Divider />
			<EditField
				onSubmit={handleUpdate}
				initValue={description}
				label='Description'
				name='description'
			/>
			<LocationEditField
				initValue={end_location}
				onSubmit={(end_location) => handleUpdate({ end_location })}
			/>
		</Box>
	);
};
TimeslotForm.EventForm = EventForm;

const TravelForm = ({ handleUpdate }) => {
	return (
		<div>
			<LocationEditField label='From' initValue='' onSubmit={handleUpdate} />
			<LocationEditField label='To' initValue='' onSubmit={handleUpdate} />
			<EditField label='Arrival' type='time' name='end_time' onSubmit={handleUpdate} />
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
