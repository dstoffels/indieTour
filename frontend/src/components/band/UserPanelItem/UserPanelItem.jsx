import { Close } from '@mui/icons-material';
import { FormControlLabel, IconButton, Stack, Switch, Typography } from '@mui/material';
import axios from 'axios';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import useAuth from 'hooks/useAuth.js';
import useBand from 'hooks/useBand.js';
import useAPI from 'hooks/useAPI.js';
import useTour from 'hooks/useTour.js';
import React from 'react';
import endpoints from 'utils/endpoints.js';

const UserPanelItem = ({ banduser, forTour = false }) => {
	const { isAdmin, isOwner, activeBand, fetchActiveBand } = useBand();
	const { activeTour } = useTour();
	const { user } = useAuth();
	const api = useAPI();

	const handleAdmin = async e => {
		await api.band.user.detail.patch(banduser.banduser_id, { is_admin: e.target.checked });
		// TODO: need to sort whether endpoint returns updated banduser list or if called from frontend
		fetchActiveBand();
	};

	const handleDeleteUser = async e => {
		const url = forTour
			? await api.tour.user.detail.delete(banduser.id)
			: await api.band.user.detail.delete(banduser.id);

		// TODO: need to sort whether endpoint returns updated banduser list or if called from frontend
		fetchActiveBand();
	};

	const color = banduser.id === user.id ? 'primary' : '';

	return (
		<PanelListItem>
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
		</PanelListItem>
	);
};

export default UserPanelItem;
