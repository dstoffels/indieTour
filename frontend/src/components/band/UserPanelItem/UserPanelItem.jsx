import { Close } from '@mui/icons-material';
import { FormControlLabel, IconButton, Stack, Switch, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import useAuth from 'hooks/useAuth.js';
import useAPI from 'hooks/useAPI.js';
import useTour from 'hooks/useTour.js';
import React from 'react';
import useBand from 'hooks/useBand.js';

const UserPanelItem = ({ banduser, forTour = false, isAdmin, isOwner }) => {
	const { removeTouruser } = useTour();
	const { updateBandUser, removeBandUser } = useBand();
	const { user } = useAuth();
	const api = useAPI();

	const handleAdmin = (e) => {
		updateBandUser(forTour ? banduser.banduser_id : banduser.id, { is_admin: e.target.checked });
	};

	const handleDeleteUser = async (e) => {
		forTour ? removeTouruser(banduser.id) : removeBandUser(banduser.id);
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
				{(isOwner || isAdmin) && (
					<IconButton onClick={handleDeleteUser} color='error'>
						<Close />
					</IconButton>
				)}
			</Stack>
		</PanelListItem>
	);
};

export default UserPanelItem;
