import { DeleteForever } from '@mui/icons-material';
import { Button, IconButton, ListItem, ListItemButton, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormData, setFormData, setTourDate } from 'redux/modalSlice.js';
import DatePickerModal from '../DatePickerModal/DatePickerModal.jsx';
import './DateFormBasic.css';

const DateFormBasic = ({ i, date = '', title = '' }) => {
	const [showClose, setShowClose] = useState(false);
	const dispatch = useDispatch();

	const setDefault = () => {
		if (!date) {
			const init = { title, date: moment().format('YYYY-MM-DD'), hidden: false };
			dispatch(setTourDate({ i, tourDate: init }));
		}
	};

	useEffect(() => {
		setDefault();
	}, []);

	const tourDate = useSelector(state => state.modal.formData.dates[i]);

	const handleChange = (key, value) => {
		const newData = { ...tourDate };
		newData[key] = value;
		dispatch(setTourDate({ i, tourDate: newData }));
	};

	return (
		<Stack
			className='tour-date-form'
			hidden={tourDate?.hidden}
			direction='row'
			spacing={1}
			justifyContent='space-between'>
			<DatePickerModal value={tourDate?.date} onChange={value => handleChange('date', value)} />
			<TextField
				value={tourDate?.title}
				onChange={e => handleChange('title', e.target.value)}
				label='Title'
				fullWidth
			/>
			<Stack direction='row' alignItems='center'>
				<IconButton onClick={() => handleChange('hidden', true)} color='error'>
					<DeleteForever />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default DateFormBasic;
