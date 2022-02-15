import React, { useState } from 'react';
import { Button, Container, Dropdown, DropdownButton, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

import DatesList from '../DatesList/DatesList.jsx';
import AddDateModal from './AddDateModal/AddDateModal.jsx';

import './Dates.css';
import { toggleCalendarView } from './redux.js';

const Dates = props => {
	const [showDateModal, setShowDateModal] = useState(true);

	const handleDateModal = () => {
		setShowDateModal(true);
	};

	return (
		<>
			<AddDateModal show={showDateModal} setShow={setShowDateModal} />
			<Navbar bg='light' sticky='top'>
				<Container>
					<DropdownButton size='sm' title='Active Tour Name'>
						<Dropdown.Item>Tour</Dropdown.Item>
						<Dropdown.Item>Tour</Dropdown.Item>
					</DropdownButton>
					<h1>
						<i className='bi bi-calendar' onClick={props.toggleCalendarView}></i>
					</h1>
				</Container>
			</Navbar>
			<DatesList />
			<Button size='lg' variant='success' className='add-btn' onClick={handleDateModal}>
				Add Date
			</Button>
		</>
	);
};

const mapStateToProps = state => {
	return { displayOptions: state.datesDisplayOptions };
};

export default connect(mapStateToProps, { toggleCalendarView })(Dates);
