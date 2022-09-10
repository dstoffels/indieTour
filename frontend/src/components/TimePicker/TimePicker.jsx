import React, { useState } from 'react';

const parseTime = time => {
	// truncate last three digits in time string
	// result: 13:00:00 => 13:00
};

const TimePicker = ({ bookings }) => {
	const bookings = [{ id: 1, user_id: 1, date: '2022-09-02', time: '13:00:00' }];
	const selectedDate = '2022-09-02';

	const timeslots = ['10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00'];

	const todaysBookings = bookings
		.filter(booking => booking.date === selectedDate)
		.map(({ time }) => time);

	console.log(date);

	const options = timeslots.map(timeslot => {
		return !todaysBookings.includes(timeslot) && <option value='timeslot'>{timeslot}</option>;
	});

	return <select>{options}</select>;
};

export default TimePicker;
