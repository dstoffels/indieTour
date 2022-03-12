import React, { useEffect, useState } from 'react';

import { InputAdornment, Stack, Switch, Typography } from '@mui/material';
import { ADMIN, MEMBER } from 'constants/roles.js';

const AdminSwitch = ({ setRole }) => {
	const [isAdmin, setIsAdmin] = useState(false);

	const handleChange = () => setIsAdmin(!isAdmin);

	useEffect(() => {
		const role = isAdmin ? ADMIN : MEMBER;
		setRole(role);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAdmin]);

	return (
		<InputAdornment position='end'>
			<Stack>
				<Typography variant='caption'>Admin</Typography>
				<Switch size='small' value={isAdmin} onChange={handleChange} />
			</Stack>
		</InputAdornment>
	);
};

export default AdminSwitch;
