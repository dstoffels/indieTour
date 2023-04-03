import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';

const AllMembersSwitch = ({ forTour, checked }) => {
	const { bandusers } = useBand();
	const { tourusers, addTouruser, removeTouruser } = useTour();

	const handleAllMembers = () => {
		checked
			? tourusers.forEach(({ id }) => removeTouruser(id))
			: bandusers.forEach(({ email }) => addTouruser(email));
	};

	return forTour ? (
		<FormControlLabel
			label='Add All'
			control={<Switch checked={checked} onChange={handleAllMembers} />}
		/>
	) : null;
};

export default AllMembersSwitch;
