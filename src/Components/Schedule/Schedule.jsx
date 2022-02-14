import React, { useEffect, useState } from 'react';
import AddEventModal from './AddEventModal/AddEventModal.jsx';

import Event from './Event/Event.jsx';

import './Schedule.css';

const Schedule = props => {
	const [showEventForm, setShowEventForm] = useState(false);
	const [events, setEvents] = useState([
		{
			startTime: '13:00 CST',
			endTime: '15:00 MST',
			description: 'Drive to venue',
			address: '304 Kemper Dr. S',
		},
	]);

	// onMount
	useEffect(() => {
		// fetch schedule items from database
		// call setItems with fetched data
	}, []);

	const addEvent = eventData => {
		let newState = [...events, eventData];
		newState.sort((a, b) => a.startTime - b.startTime);
		setEvents(newState);
	};

	function handleShowEventForm() {
		setShowEventForm(!showEventForm);
	}

	function _displayItems() {
		return events.map((item, i) => <Event key={i} item={item} />);
	}

	return (
		<div>
			<AddEventModal showEventForm={showEventForm} handleShowEventForm={handleShowEventForm} />
			{_displayItems()}
			<button className='btn btn-lg event-btn' onClick={handleShowEventForm}>
				Add Event
			</button>
		</div>
	);
};

export default Schedule;
