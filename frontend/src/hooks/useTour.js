import { useDispatch } from 'react-redux';
import { createTourThunk, editTourThunk, setTour } from '../redux/tourSlice.js';
import useStore from './useStore.js';
import useAPI from './useAPI.js';

const useTour = () => {
	const { activeTour, activeBand } = useStore();
	const dispatch = useDispatch();
	const dispatchActiveTour = tour => dispatch(setTour(tour));
	const api = useAPI();

	const fetchBandTours = async setterCB => {
		const response = await api.band.detail.tours.get(activeBand.id);
		setterCB(response.data);
	};

	const setActiveTour = async tour_id => {
		const response = await api.tour.active.post(tour_id);
		dispatchActiveTour(response.data);
	};

	const fetchActiveTour = async () => {
		const response = await api.tour.active.get();
		dispatchActiveTour(response.data);
	};

	const createNewTour = async tourData => {
		const response = await api.band.detail.tours.post(activeBand.id, tourData);
		dispatchActiveTour(response.data);
	};

	const updateActiveTour = async tourData => {
		const response = await api.tour.detail.patch(activeTour.id, tourData);
		dispatchActiveTour(response.data);
	};

	const deleteActiveTour = async () => {
		const response = await api.tour.detail.delete(activeTour.id);
		dispatchActiveTour(response.data);
	};

	const addTouruser = async userData => {
		const response = await api.tour.detail.users.post(activeTour.id, userData);
		dispatchActiveTour(response.data);
	};

	const removeTouruser = async touruser_id => {
		const response = await api.tour.user.detail.delete(touruser_id);
		dispatchActiveTour(response.data);
	};

	return {
		activeBand,
		activeTour,
		fetchBandTours,
		createNewTour,
		updateActiveTour,
		deleteActiveTour,
		fetchActiveTour,
		setActiveTour,
		addTouruser,
		removeTouruser,
	};
};

export default useTour;
