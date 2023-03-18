import axios from 'axios';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import React from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from './endpoints.js';

/**
 * State to Props:
 * vars: activeBand, activeTour, isAdmin, isOwner
 * fns: setActiveTour, fetchActiveTour, updateTour, deleteTour, addTourUser
 * @param {*} Component
 * @returns
 */
const withActiveTour = Component => props => {
	const { activeTour, setActiveTour, fetchActiveTour } = useTour();
	const { activeBand, fetchActiveBand, fetchUserBands, isOwner, isAdmin } = useBand();

	const config = getConfigObj();

	const updateTour = async formData => {
		try {
			const response = await axios.patch(
				endpoints.tours(activeTour.band_id, activeTour.id),
				formData,
				config,
			);
			fetchActiveBand();
			fetchActiveTour();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	const deleteTour = async () => {
		try {
			await axios.delete(endpoints.tours(activeTour.band_id, activeTour.id), config);
			fetchActiveBand();
			fetchActiveTour();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	const addTourUser = async formData => {
		try {
			await axios.post(endpoints.tourusers(activeBand.id, activeTour.id), formData, config);
			fetchActiveBand();
			fetchActiveTour();
		} catch (error) {
			console.error(error.response.data);
		}
	};
	const addTourDate = async formData => {
		try {
			await axios.post(endpoints.dates(activeBand.id, activeTour.id), formData, config);
			fetchActiveBand();
			fetchActiveTour();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	return activeTour ? (
		<Component
			{...props}
			activeBand={activeBand}
			activeTour={activeTour}
			setActiveTour={setActiveTour}
			fetchActiveTour={fetchActiveTour}
			updateTour={updateTour}
			deleteTour={deleteTour}
			isAdmin={isAdmin}
			isOwner={isOwner}
			addTourUser={addTourUser}
			addTourDate={addTourDate}
		/>
	) : null;
};

export default withActiveTour;
