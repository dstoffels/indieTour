import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { MEMBER } from 'constants/roles.js';
import AdminSwitch from './AdminSwitch.jsx';

const MemberField = ({ i, value, onChange }) => {
	const [role, setRole] = useState(MEMBER);

	const handleChange = e => onChange(i, e.target.value, role);

	useEffect(() => {
		onChange(i, value, role);
	}, [role]);

	return (
		<FormControl fullWidth>
			<InputLabel color='info' sx={{ color: 'white' }} htmlFor={`member-email-input-${i}`}>
				Member Email
			</InputLabel>
			<OutlinedInput
				size='small'
				autoFocus
				id={`member-email-input-${i}`}
				label='Member Email'
				color='info'
				type='email'
				required
				value={value}
				onChange={handleChange}
				inputProps={{ style: { color: 'white' } }}
				endAdornment={<AdminSwitch setRole={setRole} />}
			/>
		</FormControl>
	);
};

export default MemberField;
