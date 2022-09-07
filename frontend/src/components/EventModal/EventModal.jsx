import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EventModal = ({ booking, show, closeModal }) => {
	return (
		<Modal show={show} onHide={closeModal}>
			<Modal.Header closeButton>Modal</Modal.Header>
			<Modal.Body>Stuff here</Modal.Body>
			<Modal.Footer>
				<Button onClick={closeModal}>Close</Button>
				<Button>Save</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EventModal;
