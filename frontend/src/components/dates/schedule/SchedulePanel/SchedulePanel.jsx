import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import AddTimeslotForm from '../AddTimeslotForm/AddTimeslotForm.jsx';
import TimeSlotListitem from '../TimeSlotListitem/TimeSlotListitem.jsx';
import AddTimeslotBtn from '../AddTimeslotBtn/AddTimeslotBtn.jsx';

const SchedulePanel = ({ activeDate, isAdmin }) => {
	const timeslots = activeDate.timeslots?.map((timeslot) => (
		<TimeSlotListitem key={`ts-${timeslot.id}`} activeDate={activeDate} timeslot={timeslot} />
	));

	return (
		<Panel title='Schedule' size={3.5} elevation={-1}>
			<AddTimeslotBtn />
			{timeslots}
		</Panel>
	);
};

export default SchedulePanel;
