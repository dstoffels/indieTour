import React, { useEffect, useState } from 'react';

import { InputAdornment, Stack, Switch, Typography } from '@mui/material';
import { ADMIN, MEMBER } from 'constants/roles.js';

const AdminSwitch = ({ role, setRole }) => {
	const [isAdmin, setIsAdmin] = useState(role === ADMIN);

	const handleChange = () => setIsAdmin(!isAdmin);

	useEffect(() => {
		const role = isAdmin ? ADMIN : MEMBER;
		setRole(role);
	}, [isAdmin]);

	return (
		<InputAdornment position='end'>
			<Stack>
				<Typography variant='caption'>Admin</Typography>
				<Switch
					defaultChecked={role === ADMIN}
					size='small'
					value={isAdmin}
					onChange={handleChange}
				/>
			</Stack>
		</InputAdornment>
	);
};

export default AdminSwitch;
