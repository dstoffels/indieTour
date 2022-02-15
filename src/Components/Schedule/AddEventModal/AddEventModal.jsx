import React, { useState } from 'react';

import './AddEventModal.css';

// TODO: need to pass date down from schedule
const AddEventModal = ({ addEvent, showEventForm, handleShowEventForm }) => {
	const [description, setDescription] = useState('');
	const [startTime, setStartTime] = useState('12:00');
	const [endTime, setEndTime] = useState('');

	function handleDescription(e) {
		setDescription(e.target.value);
	}

	function handleStartTime(e) {
		setStartTime(e.target.value);
	}

	function handleEndTime(e) {
		setEndTime(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		addEvent({ description, startTime, endTime });
		handleShowEventForm(false);
	}

	function handleCancel() {
		handleShowEventForm(false);
	}

	return (
		<div className={`add-event-modal${!showEventForm ? ' hidden' : ''}`}>
			<div className='add-event-form'>
				<h1>New Event</h1>
				<form onSubmit={handleSubmit}>
					<div className='mb-3'>
						<label className='form-label'>Description *</label>
						<input
							required
							className='form-control'
							type='text'
							value={description}
							onChange={handleDescription}
						/>
					</div>
					<div className='mb-3'>
						<label className='form-label'>Start Time *</label>
						<input
							required
							className='form-control'
							type='time'
							value={startTime}
							onChange={handleStartTime}
						/>
					</div>
					<div className='mb-3'>
						<label className='form-label'>End Time</label>
						<input className='form-control' type='time' value={endTime} onChange={handleEndTime} />
					</div>
					<button className='btn btn-primary form-control mb-3'>Add Event</button>
					<button onClick={handleCancel} type='button' className='btn btn-danger form-control mb-3'>
						Cancel
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddEventModal;
