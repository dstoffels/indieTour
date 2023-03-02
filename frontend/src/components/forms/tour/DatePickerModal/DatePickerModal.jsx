import { CalendarMonth } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { PickersDay, StaticDatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';

const DatePickerModal = ({ tourDates = [], value, onChange }) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	const handleChange = date => {
		onChange(date.format('YYYY-MM-DD'));
		handleClose();
	};

	const handleExistingTourDates = (day, _value, dayProps) => {
		const dates = tourDates.map(dateObj => dateObj.date);
		return (
			<PickersDay
				{...dayProps}
				disabled={dates.includes(moment(dayProps.key, 'LLLL').format('YYYY-MM-DD'))}
			/>
		);
	};

	return (
		<>
			<Button
				sx={{ px: 4 }}
				variant='outlined'
				onClick={() => setOpen(true)}
				endIcon={<CalendarMonth />}>
				{moment(value).format('L')}
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<StaticDatePicker
					renderDay={handleExistingTourDates}
					displayStaticWrapperAs='desktop'
					value={value}
					onChange={handleChange}
					renderInput={params => <TextField {...params} />}
				/>
			</Dialog>
		</>
	);
};

export default DatePickerModal;
