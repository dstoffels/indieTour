import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import AddTimeslotForm from '../AddTimeslotForm/AddTimeslotForm.jsx';
import TimeSlotListitem from '../TimeSlotListitem/TimeSlotListitem.jsx';
import AddTimeslotBtn from '../AddTimeslotBtn/AddTimeslotBtn.jsx';
import { Divider, Paper, Typography } from '@mui/material';
import useBand from 'hooks/useBand.js';
import useDates from 'hooks/useDates.js';
import AddTimeslotBtnForm from '../AddTimeslotBtnForm/AddTimeslotBtnForm.jsx';

const SchedulePanel = ({}) => {
	const { isAdmin } = useBand();
	const { activeDate } = useDates();

	const timeslots = activeDate.timeslots?.map((timeslot) => (
		<TimeSlotListitem key={`ts-${timeslot.id}`} activeDate={activeDate} timeslot={timeslot} />
	));

	const nextDaySlots = activeDate.timeslots_after_midnight?.map((timeslot) => (
		<TimeSlotListitem key={`ts-${timeslot.id}`} activeDate={activeDate} timeslot={timeslot} />
	));

	return (
		<Panel title='Schedule' size={6} elevation={-1}>
			<AddTimeslotBtnForm />
			{timeslots}
			{nextDaySlots.length > 0 && (
				<>
					<Paper>
						<Typography paddingX={2} variant='overline'>
							After Midnight
						</Typography>
					</Paper>
					<Divider />
					{nextDaySlots}
				</>
			)}
		</Panel>
	);
};

export default SchedulePanel;
