import axios from 'axios';
import useBand from 'hooks/useBand.js';
import React from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from './endpoints.js';

const withActiveBand = Component => props => {
	const { activeBand, setActiveband, fetchActiveBand, isOwner, isAdmin } = useBand();

	const config = getConfigObj();

	const updateBand = async formData => {
		try {
			const response = await axios.patch(endpoints.bands(activeBand.id), formData, config);
			fetchActiveBand();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	const addBandUser = async formData => {
		try {
			await axios.post(endpoints.bandusers(activeBand.id), formData, config);
			fetchActiveBand();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	return activeBand ? (
		<Component
			{...props}
			activeBand={activeBand}
			setActiveband={setActiveband}
			fetchActiveBand={fetchActiveBand}
			isOwner={isOwner}
			isAdmin={isAdmin}
			updateBand={updateBand}
			addBandUser={addBandUser}
		/>
	) : (
		<div></div>
	);
};

export default withActiveBand;
