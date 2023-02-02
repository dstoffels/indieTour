import { DeleteForever } from '@mui/icons-material';
import { Button, IconButton, ListItem, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import DatePickerModal from '../DatePickerModal/DatePickerModal.jsx';
import './DateFormBasic.css';

const DateFormBasic = ({ date = '', title = '', onDelete }) => {
	const [formData, setFormData] = useState({ date, title });
	const [hidden, setHidden] = useState(false);

	const handleChange = (key, value) => {
		const newData = { ...formData };
		newData[key] = value;
		setFormData(newData);
	};

	return (
		<Stack hidden={hidden} direction='row' spacing={1} justifyContent='space-between'>
			<DatePickerModal title={formData.title} />
			<TextField
				value={formData.title}
				onChange={e => handleChange('title', e.target.value)}
				label='Title'
				fullWidth
			/>
			<Stack pl={1} direction='row' alignItems='center'>
				<IconButton edge='start' onClick={() => setHidden(true)} color='error'>
					<DeleteForever />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default DateFormBasic;
