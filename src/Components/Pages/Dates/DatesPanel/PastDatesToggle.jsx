import { FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import useDates from '../useDates.js';

const PastDatesToggle = props => {
	const { showPastDates, togglePastDates } = useDates();

	return (
		<FormControlLabel
			label='Past Dates'
			control={<Switch size='small' checked={showPastDates} onClick={togglePastDates} />}
		/>
	);
};

export default PastDatesToggle;
