import { Stack } from '@mui/material';
import React from 'react';

const SideStack = ({
	spacing = 2,
	padding = 2,
	paddingX,
	paddingY,
	justifyContent = 'space-between',
	children,
	className = '',
	onClick,
}) => {
	return (
		<Stack
			onClick={onClick}
			className={className}
			width='100%'
			spacing={spacing}
			padding={paddingX || paddingY ? 0 : padding}
			paddingX={paddingX}
			paddingY={paddingY}
			direction='row'
			justifyContent='space-between'
			alignItems='center'
		>
			{children}
		</Stack>
	);
};

export default SideStack;
