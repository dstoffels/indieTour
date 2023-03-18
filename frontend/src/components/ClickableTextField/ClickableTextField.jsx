import { FormControl, InputLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const ClickableTextField = ({ label, value, onChange }) => {
	const [isEditing, setIsEditing] = useState(false);
	return (
		<FormControl onClick={e => setIsEditing(true)} size='small'>
			<InputLabel>{label}</InputLabel>
			{isEditing ? <TextField variant='standard' /> : <Typography variant='h4'>{value}</Typography>}
		</FormControl>
	);
};
