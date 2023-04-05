import { TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useAPI from 'hooks/useAPI.js';
import useProspect from 'hooks/useProspect.js';
import moment from 'moment';
import React, { useState } from 'react';

const AddLogEntryForm = ({}) => {
	const [note, setNote] = useState('');

	const { addLogEntry } = useProspect();

	const handleNote = (e) => setNote(e.target.value);

	const timestamp = moment();

	const handleAddEntry = () => {
		addLogEntry({ note, timestamp });
	};

	return (
		<ButtonForm btnText='Add Entry' onSubmit={handleAddEntry} divider={false}>
			<TextField variant='standard' label='Note' name='note' value={note} onChange={handleNote} />
		</ButtonForm>
	);
};

export default AddLogEntryForm;
