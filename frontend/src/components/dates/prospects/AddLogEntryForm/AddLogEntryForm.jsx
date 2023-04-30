import { TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useAPI from 'hooks/useAPI.js';
import useProspect from 'hooks/useProspect.js';
import moment from 'moment';
import React, { useState } from 'react';

const AddLogEntryForm = ({ prospect, onSubmit }) => {
	const [note, setNote] = useState('');

	const { addLogEntry } = useProspect();

	const handleNote = (e) => setNote(e.target.value);

	const handleAddEntry = () => {
		addLogEntry(prospect.id, { note }, onSubmit);
	};

	return (
		<ButtonForm btnText='Add Entry' onSubmit={handleAddEntry} divider={false}>
			<TextField
				fullWidth
				variant='standard'
				label='Note'
				name='note'
				value={note}
				onChange={handleNote}
			/>
		</ButtonForm>
	);
};

export default AddLogEntryForm;
