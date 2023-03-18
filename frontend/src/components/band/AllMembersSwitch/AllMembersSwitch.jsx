import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import useTour from 'hooks/useTour.js';
import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import useBand from 'hooks/useBand.js';
import { getConfigObj } from 'redux/userSlice.js';

const AllMembersSwitch = ({ forTour, checked, users = [], onSubmit }) => {
	const { activeTour, fetchActiveTour } = useTour();

	const handleAllMembers = () => {
		const config = getConfigObj();
		users.forEach(async user => {
			checked
				? await axios.delete(
						endpoints.tourusers(activeTour.band_id, activeTour.id, user.banduser_id),
						config,
				  )
				: await onSubmit(user);
			fetchActiveTour();
		});
	};

	return forTour ? (
		<FormControlLabel
			label='All Members'
			control={<Switch checked={checked} onChange={handleAllMembers} />}
		/>
	) : null;
};

export default AllMembersSwitch;
