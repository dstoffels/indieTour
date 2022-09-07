import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button.js';

import EventModal from '../EventModal/EventModal.jsx';

const Bookings = ({ bookings }) => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			<h1>Bookings will go here</h1>
			<Button onClick={handleClick}>Pretend Event</Button>
			<EventModal show={showModal} closeModal={handleCloseModal} />
			<FullCalendar eventClick={handleClick} />
		</div>
	);
};

export default Bookings;
