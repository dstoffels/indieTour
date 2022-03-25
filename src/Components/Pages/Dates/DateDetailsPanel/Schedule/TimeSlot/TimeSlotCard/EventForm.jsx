import { Clear, Remove } from '@mui/icons-material';
import {
	Autocomplete,
	Button,
	CardContent,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import LocationField from 'Components/Pages/Dates/AddDateModal/LocationField.jsx';
import useDates from 'Components/Pages/Dates/useDates.js';
import React, { useState } from 'react';
import { eventBldr } from 'utils/helpers.js';
import CancelEditDateBtn from './CancelEditEventBtn.jsx';
import DeleteEventModalBtn from './DeleteEventModal/DeleteEventModalBtn.jsx';
import TimeField from './TimeField.jsx';

export const eventTypes = ['Event', 'Travel', 'Flight', 'Meeting'];

const EventForm = ({ event, i }) => {
	const { activeDate, editActiveDate, events } = useDates();
	const [hasEndTime, setEndTime] = useState(Boolean(event.endTime)); // local

	const handleChange = e => {
		const timeslots = [...activeDate.timeslots];
		timeslots[i] = { ...timeslots[i], [e.target.name]: e.target.value };
		timeslots.sort(
			(a, b) => new Date(`${a.date} ${a.startTime}`) - new Date(`${b.date} ${b.startTime}`),
		);
		editActiveDate({ ...activeDate, timeslots });
	};

	const endTimeIcon = (
		<IconButton sx={{ padding: '2px' }} onClick={() => setEndTime(false)}>
			<Clear />
		</IconButton>
	);

	const { date, description, type, startTime, endTime, startLocation, endLocation } = events[i];

	return (
		<CardContent className='p-2 flex-between w-100'>
			<Stack className='w-100' spacing={1} marginBottom={3} position='relative'>
				<CancelEditDateBtn />
				<Typography color='primary' variant='h6' paddingBottom={1}>
					Editing event
				</Typography>
				<TextField
					fullWidth
					required
					label='Description'
					size='small'
					name='description'
					value={description}
					onChange={handleChange}
				/>

				<Stack direction='row' spacing={1}>
					<TimeField
						name='startTime'
						value={startTime}
						onChange={handleChange}
						date={event.date}
						required
						label='Start Time'
					/>

					{hasEndTime ? (
						<TimeField
							name={'endTime'}
							value={endTime}
							onChange={handleChange}
							date={date}
							label='End Time'
							icon={endTimeIcon}
						/>
					) : (
						<Button fullWidth onClick={() => setEndTime(true)}>
							End time
						</Button>
					)}
				</Stack>

				<LocationField
					size='small'
					label='Start Location'
					name='startLocation'
					value={startLocation}
					onChange={handleChange}
				/>

				<LocationField
					size='small'
					name='endLocation'
					label='End Location'
					value={endLocation}
					onChange={handleChange}
				/>

				<Autocomplete
					value={type}
					onChange={(_e, value) => handleChange(eventBldr('type', value))}
					autoHighlight
					fullWidth
					options={eventTypes}
					renderInput={params => (
						<TextField {...params} size='small' required name='type' fullWidth label='Event Type' />
					)}
				/>
				<DeleteEventModalBtn />
			</Stack>
		</CardContent>
	);
};

export default EventForm;
