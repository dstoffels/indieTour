import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import useTour from 'hooks/useTour.js';
import useAPI from 'hooks/useAPI.js';

const AllMembersSwitch = ({ forTour, checked, users = [], onSubmit }) => {
	const { activeTour, fetchActiveTour } = useTour();
	const api = useAPI();

	console.log(users);

	const handleAllMembers = () => {
		users.forEach(async user => {
			checked
				? await api.tour.user.detail.delete(user.touruser_id)
				: // await axios.delete(
				  // 		endpoints.tourusers(activeTour.band_id, activeTour.id, user.banduser_id),
				  // 		config,
				  //   )
				  await onSubmit(user);
			fetchActiveTour();
		});
	};

	return forTour ? (
		<FormControlLabel
			label='Add All'
			control={<Switch checked={checked} onChange={handleAllMembers} />}
		/>
	) : null;
};

export default AllMembersSwitch;
