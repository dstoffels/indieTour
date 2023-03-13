import { useDispatch } from 'react-redux';
import { createTourThunk, editTourThunk, fetchActiveTourThunk } from '../redux/tourSlice.js';
import useStore from './useStore.js';

const useTour = () => {
	const dispatch = useDispatch();
	const { activeTour } = useStore();

	const createNewTour = tourData => dispatch(createTourThunk(tourData));

	const updateTour = tourData => {
		dispatch(editTourThunk(tourData));
	};

	const fetchActiveTour = () => dispatch(fetchActiveTourThunk());

	return { createNewTour, updateTour, fetchActiveTour, activeTour };
};

export default useTour;
