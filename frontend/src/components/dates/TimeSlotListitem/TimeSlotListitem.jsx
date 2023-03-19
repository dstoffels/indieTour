import { Stack, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import moment from 'moment';
import React from 'react';

const TimeSlotListitem = ({ activeDate, timeslot }) => {
	let { start_time, end_time, description, start_location, end_location } = timeslot;
	start_time = moment(start_time, 'HH:mm').format('HH:mm');
	end_time = moment(end_time, 'HH:mm').format('HH:mm');

	return (
		<PanelListItem>
			<Stack direction='row' spacing={2}>
				<Typography variant='body2'>
					{start_time}
					{timeslot.end_time && ` - ${end_time}`}
				</Typography>
				<Typography>{timeslot.description}</Typography>
			</Stack>
		</PanelListItem>
	);
};

export default TimeSlotListitem;
