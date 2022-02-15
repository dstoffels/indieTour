import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, Modal, Nav } from 'react-bootstrap';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ShowTypeToggle from './ShowTypeToggle/ShowTypeToggle.jsx';
import Switch from '@mui/material/Switch';

// TODO: Destructure currentTour and active tours list from props,
// start date on day after last date/tour start date?
const AddDateModal = ({ show, setShow }) => {
	const [date, setDate] = useState('2022-02-25');
	const handleDate = e => setDate(e.target.value);

	const [description, setDescription] = useState('');
	const handleDescription = e => setDescription(e.target.value);

	//TODO: gmaps api to show a list
	const [location, setLocation] = useState('');
	const handleLocation = e => setLocation(e.target.value);

	const [details, setDetails] = useState('');
	const handleDetails = e => setDetails(e.target.value);

	const [confirmed, setConfirmed] = useState(false);
	const handleConfirmed = e => setConfirmed(!confirmed);

	const handleSubmit = e => {
		e.preventDefault();
		// props.addDate();
		setShow(false);
		resetForm();
	};

	const resetForm = () => {
		setDate('');
		setDescription('');
		setLocation('');
		setDetails('');
		setConfirmed(false);
	};

	const handleClose = () => setShow(false);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton className='centered'>
				<Modal.Title>New Date for "TourName"</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit} id='new-date-form'>
					{/* DATEPICKER */}
					<FloatingLabel label='Date'>
						<Form.Control type='date' className='mb-3' value={date} onChange={handleDate} />
					</FloatingLabel>

					{/* SHOW TYPE TOGGLE */}
					<ShowTypeToggle />

					<FloatingLabel label='Description'>
						<Form.Control
							type='text'
							className='mb-3'
							placeholder=' '
							value={description}
							onChange={handleDescription}
						/>
					</FloatingLabel>

					<FloatingLabel label='Location'>
						<Form.Control
							placeholder=' '
							type='text'
							className='mb-3'
							value={location}
							onChange={handleLocation}
						/>
					</FloatingLabel>

					<Form.Group className='mb-3'>
						<Form.Label>Details</Form.Label>
						<Form.Control as='textarea' rows={6} value={details} onChange={handleDetails} />
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Confirmed?</Form.Label>
						<Switch checked={confirmed} onChange={handleConfirmed} color='success' />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='danger' type='button' onClick={handleClose}>
					Close
				</Button>
				<Button form='new-date-form' type='submit'>
					Add Date
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddDateModal;
