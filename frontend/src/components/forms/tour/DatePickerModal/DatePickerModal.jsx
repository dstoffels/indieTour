import { Button, Popover, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { PickersDay, StaticDatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';

const DatePickerModal = ({ tourDates = [], value, onChange }) => {
	const [anchor, setAnchor] = useState();

	const handleOpen = e => {
		setAnchor(e.currentTarget);
	};

	const handleClose = () => setAnchor(null);

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

	const open = Boolean(anchor);

	return (
		<>
			<Button sx={{ padding: 0.5 }} variant='text' onClick={handleOpen} onLoad={handleOpen}>
				<Stack>
					<Typography variant='caption'>{moment(value).format('ddd')}</Typography>
					<Typography>{moment(value).format('MMM DD')}</Typography>
				</Stack>
			</Button>
			<Popover
				open={open}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				anchorEl={anchor}>
				<StaticDatePicker
					renderDay={handleExistingTourDates}
					displayStaticWrapperAs='desktop'
					value={value}
					onChange={handleChange}
					renderInput={params => <TextField {...params} />}
				/>
			</Popover>
		</>
	);
};

export default DatePickerModal;
