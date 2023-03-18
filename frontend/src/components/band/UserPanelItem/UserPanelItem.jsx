import { Close } from '@mui/icons-material';
import { FormControlLabel, IconButton, Stack, Switch, Typography } from '@mui/material';
import axios from 'axios';
import ListPanelItem from 'components/generic/ListPanelItem/ListPanelItem.jsx';
import useAuth from 'hooks/useAuth.js';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import React from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';

const UserPanelItem = ({ banduser, forTour = false }) => {
	const { isAdmin, isOwner, activeBand, fetchActiveBand } = useBand();
	const { activeTour } = useTour();
	const { user } = useAuth();

	const handleAdmin = async e => {
		const config = getConfigObj();
		await axios.patch(
			endpoints.bandusers(activeBand.id, banduser.banduser_id),
			{ is_admin: e.target.checked },
			config,
		);
		fetchActiveBand();
	};

	const handleDeleteUser = async e => {
		const config = getConfigObj();

		const url = forTour
			? endpoints.tourusers(activeBand.id, activeTour.id, banduser.banduser_id)
			: endpoints.bandusers(activeBand.id, banduser.banduser_id);

		await axios.delete(url, config);
		fetchActiveBand();
	};

	const color = banduser.id === user.id ? 'primary' : '';

	return (
		<ListPanelItem>
			<Stack direction='row' justifyContent='space-between'>
				<div className='flex-grow'>
					<Typography color={color}>{banduser.username}</Typography>
					<Typography variant='body2' color={color}>
						{banduser.email}
					</Typography>
				</div>
				{isAdmin && (
					<FormControlLabel
						label='Admin'
						control={<Switch checked={banduser.is_admin} onClick={handleAdmin} />}
					/>
				)}
				{(isOwner || (isAdmin && !banduser.is_admin)) && (
					<IconButton onClick={handleDeleteUser} color='error'>
						<Close />
					</IconButton>
				)}
			</Stack>
		</ListPanelItem>
	);
};

export default UserPanelItem;
