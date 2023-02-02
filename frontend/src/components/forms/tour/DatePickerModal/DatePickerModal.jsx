import { CalendarMonth } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { StaticDatePicker } from '@mui/x-date-pickers';
import React from 'react';
import { useState } from 'react';

const DatePickerModal = ({ activeDate, title }) => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(activeDate);

	const handleClose = () => setOpen(false);

	const handleChange = value => {
		setDate(value.format('L'));
		console.log(value.format('YYYY/MM/DD'));
		handleClose();
	};

	return (
		<>
			<Button
				sx={{ px: 4 }}
				variant='outlined'
				onClick={() => setOpen(true)}
				endIcon={<CalendarMonth />}>
				{date}
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<StaticDatePicker
					displayStaticWrapperAs='desktop'
					value={date}
					onChange={handleChange}
					renderInput={params => <TextField {...params} />}
				/>
			</Dialog>
		</>
	);
};

export default DatePickerModal;
