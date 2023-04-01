import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import useTour from 'hooks/useTour.js';
import useAPI from 'hooks/useAPI.js';

const AllMembersSwitch = ({ forTour, checked, bandusers = [], tourusers = [], onSubmit }) => {
	const { activeTour, activeBand, fetchActiveTour, addTouruser, removeTouruser } = useTour();
	const api = useAPI();

	const handleAllMembers = () => {
		checked
			? activeTour.users.forEach(async ({ touruser_id }) => await removeTouruser(touruser_id))
			: activeBand.users.forEach(async user => await addTouruser(user));

		fetchActiveTour();
	};

	return forTour ? (
		<FormControlLabel
			label='Add All'
			control={<Switch checked={checked} onChange={handleAllMembers} />}
		/>
	) : null;
};

export default AllMembersSwitch;
