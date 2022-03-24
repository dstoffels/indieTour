import { Stack, Switch, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { eventBldr } from 'utils/helpers.js';

const ConfirmSwitch = ({ value, onChange }) => {
	const handleClick = () => onChange(eventBldr('isConfirmed', !value));

	const color = value ? 'primary' : 'text.disabled';

	return (
		<Stack>
			<Typography color={color} variant='body2'>
				Confirmed
			</Typography>
			<Switch checked={value} onChange={handleClick} className='mx-auto' />
		</Stack>
	);
};

export default ConfirmSwitch;
