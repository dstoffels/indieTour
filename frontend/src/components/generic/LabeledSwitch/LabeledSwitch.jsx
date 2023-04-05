import { Stack, Switch, Typography } from '@mui/material';
import React from 'react';
const LabeledSwitch = ({ label, name, checked, onChange }) => {
	return (
		<Stack alignItems='center'>
			<Switch size='small' name={name} checked={checked} onChange={onChange} />
			<Typography variant='caption'>{label}</Typography>
		</Stack>
	);
};

export default LabeledSwitch;
