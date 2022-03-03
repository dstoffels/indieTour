import { TextField } from '@mui/material';
import React from 'react';

const PasswordField = ({ value, onChange, label, name = 'password' }) => (
	<TextField
		value={value}
		onChange={onChange}
		type='password'
		name={name}
		label={label}
		required
		fullWidth
	/>
);

export default PasswordField;
