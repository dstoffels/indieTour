import axios from 'axios';
import useBand from 'hooks/useBand.js';
import useStore from 'hooks/useStore.js';
import useTour from 'hooks/useTour.js';
import React from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from './endpoints.js';
import withActiveBand from './withActiveBand.js';

const withActiveTour = Component => props => {
	const { activeTour, setActiveTour, fetchActiveTour } = useTour();
	const { fetchActiveBand, fetchUserBands } = useBand();

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

	return activeTour ? (
		<Component
			{...props}
			activeTour={activeTour}
			setActiveTour={setActiveTour}
			fetchActiveTour={fetchActiveTour}
			updateTour={updateTour}
			deleteTour={deleteTour}
		/>
	) : null;
};

export default withActiveTour;
