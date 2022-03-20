import { Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const MiniDateForm = ({ i, date, onChange, dates, setDates }) => {
	const [form, setForm] = useState(date);

	const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

	useEffect(() => {
		onChange(i, form);
	}, [form]);

	return (
		<Stack direction='row' spacing={1}>
			<TextField
				size='small'
				autoFocus
				type='date'
				name='date'
				label='Date'
				value={form.date}
				onChange={handleChange}
			/>
			<TextField
				size='small'
				type='text'
				name='title'
				fullWidth
				label='Title'
				value={form.title}
				onChange={handleChange}
			/>
		</Stack>
	);
};

export default MiniDateForm;
