import { Stack } from '@mui/material';
import React from 'react';

const SideStack = ({ spacing = 2, padding = 2, justifyContent = 'space-between', children }) => {
	return (
		<Stack
			width='100%'
			spacing={spacing}
			padding={padding}
			direction='row'
			justifyContent='space-between'
			alignItems='center'
		>
			{children}
		</Stack>
	);
};

export default SideStack;
