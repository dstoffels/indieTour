import { DeleteForever } from '@mui/icons-material';
import { Button, IconButton, ListItem, ListItemButton, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import moment from 'moment/moment.js';
import DatePickerModal from '../DatePickerModal/DatePickerModal.jsx';
import './DateFormBasic.css';

const DateFormBasic = ({ i, tourDate, tourDates = [], setTourDates }) => {
	const setTourDate = newTourDate => {
		const newTourDates = [...tourDates];
		newTourDates[i] = newTourDate;
		setTourDates(newTourDates);
	};

	const handleDate = value => {
		const newTourDate = { ...tourDate, date: value };
		const newTourDates = [...tourDates];
		newTourDates[i] = newTourDate;

		newTourDates.sort(
			(a, b) => moment(a.date).format('YYYYMMDD') - moment(b.date).format('YYYYMMDD'),
		);
		// setTourDate(newTourDate);
		setTourDates(newTourDates);
	};

	const handleTitle = e => setTourDate({ ...tourDate, title: e.target.value });

	const handleDelete = () => {
		const newTourDates = [...tourDates];
		newTourDates.splice(i, 1);
		setTourDates(newTourDates);
	};

	return (
		tourDate && (
			<Stack
				className='tour-date-form'
				hidden={tourDate.hidden}
				direction='row'
				spacing={1}
				justifyContent='space-between'>
				<DatePickerModal value={tourDate.date} onChange={handleDate} tourDates={tourDates} />
				<TextField value={tourDate.title} onChange={handleTitle} label='Title' fullWidth />
				<Stack direction='row' alignItems='center'>
					<IconButton onClick={handleDelete} color='error'>
						<DeleteForever />
					</IconButton>
				</Stack>
			</Stack>
		)
	);
};

export default DateFormBasic;
