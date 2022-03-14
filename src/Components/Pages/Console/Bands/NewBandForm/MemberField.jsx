import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import AdminSwitch from './AdminSwitch.jsx';
import { MEMBER } from 'constants/roles.js';

const MemberField = ({ i, value, onChange }) => {
	const [role, setRole] = useState(MEMBER);

	const handleChange = e => onChange(i, e.target.value, role);

	useEffect(() => {
		onChange(i, value, role);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [role]);

	return (
		<FormControl fullWidth>
			<InputLabel color='success' sx={{ color: 'white' }} htmlFor={`member-email-input-${i}`}>
				Member Email
			</InputLabel>
			<OutlinedInput
				autoFocus
				size='small'
				id={`member-email-input-${i}`}
				label='Member Email'
				color='success'
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
