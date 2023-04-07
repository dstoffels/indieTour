import { Divider, Stack } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import React from 'react';

const TimeslotForm = ({ timeslot }) => {
	const { type } = timeslot;
	const setForm = () => {
		switch (type) {
			case 'Travel':
				return <TravelForm />;
			case 'Flight':
				return <FlightForm />;
			default:
				return <EventForm />;
		}
	};

	return (
		<>
			<Stack spacing={1}>
				<TimeslotForm.EventForm />
				{/* <Stack direction='row'>
					<EditField
						onSubmit={handleUpdate}
						type='time'
						initValue={start_time}
						label='Start Time'
						name='start_time'
					/>
					<EditField
						onSubmit={handleUpdate}
						type='time'
						initValue={end_time}
						label='End Time'
						name='end_time'
					/>
				</Stack>
				<EditField
					onSubmit={handleUpdate}
					initValue={description}
					label='Description'
					name='description'
				/>
				<LocationEditField
					initValue={timeslot.start_location}
					label={forTravel ? 'Start Location' : 'Location'}
					onSubmit={handleUpdate}
				/>
				{forTravel && (
					<LocationEditField
						initValue={timeslot.start_location}
						onSubmit={handleUpdate}
						label='End Location'
					/>
				)}
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
							<Done />
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
				</Box> */}
			</Stack>
			<Divider />
		</>
	);
};

export default TimeslotForm;

const EventForm = ({}) => {
	return <div></div>;
};
TimeslotForm.EventForm = EventForm;

const TravelForm = ({}) => {
	return <div></div>;
};
TimeslotForm.TravelForm = TravelForm;

const FlightForm = ({}) => {
	return <div></div>;
};
TimeslotForm.FlightForm = FlightForm;

const MeetingForm = ({}) => {
	return <div></div>;
};
TimeslotForm.MeetingForm = MeetingForm;
