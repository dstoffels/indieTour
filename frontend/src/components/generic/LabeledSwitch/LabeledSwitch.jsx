import { Stack, Switch, Typography, colors } from '@mui/material';
import React from 'react';
const LabeledSwitch = ({ label, name, checked, onChange }) => {
	const color = checked ? 'primary' : '';

	return (
		<Stack alignItems='center'>
			<Switch name={name} type='checkbox' checked={checked} onChange={onChange} />
			<Typography color={color} variant='caption'>
				{label}
			</Typography>
		</Stack>
	);
};

export default LabeledSwitch;
