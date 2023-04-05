import { useGlobalState } from 'context/GlobalStateContext.js';
import useAPI from './useAPI.js';
import useBand from './useBand.js';

const useTour = () => {
	const { activeBand } = useBand();

	const { activeTour, setActiveTour } = useGlobalState();
	const api = useAPI(``);

	const setUserActiveTour = (tour_id) => {
		api.tour.active.post(tour_id, setActiveTour);
	};

	const fetchUserActiveTour = () => {
		api.tour.active.get(setActiveTour);
	};

	const createNewTour = (tourData) => {
		api.band.detail.tours.post(activeBand?.id, tourData, setActiveTour);
	};

	const fetchBandTours = (callback) => {
		api.band.detail.tours.get(activeBand?.id, callback);
	};

	const updateActiveTour = (tourData) => {
		api.tour.detail.patch(activeTour.id, tourData, setActiveTour);
	};

	const deleteActiveTour = () => {
		api.tour.detail.delete(activeTour.id, setActiveTour);
	};

	const addTouruser = (email) => {
		api.tour.detail.users.post(activeTour.id, { email }, setActiveTour);
	};

	const removeTouruser = (touruser_id) => {
		api.tour.user.detail.delete(touruser_id, setActiveTour);
	};

	const withActiveTour = (jsx) => {
		return activeTour ? jsx : null;
	};

	return {
		activeTour,
		tourusers: activeTour?.users,
		fetchUserActiveTour,
		setUserActiveTour,
		createNewTour,
		fetchBandTours,
		updateActiveTour,
		deleteActiveTour,
		addTouruser,
		removeTouruser,
		withActiveTour,
	};
};

export default useTour;
