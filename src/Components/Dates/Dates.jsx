import React from 'react';
import { Button } from 'react-bootstrap';

import DatesList from '../DatesList/DatesList.jsx';

import './Dates.css';

const Dates = props => {
	return (
		<>
			<DatesList />
			<Button size='lg' variant='success' className='date-btn'>
				Add Date
			</Button>
		</>
	);
};

export default Dates;
