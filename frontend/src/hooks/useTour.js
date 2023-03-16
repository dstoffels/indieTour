import { useDispatch } from 'react-redux';
import {
	createTourThunk,
	editTourThunk,
	fetchActiveTourThunk,
	setActiveTourThunk,
} from '../redux/tourSlice.js';
import useStore from './useStore.js';

const useTour = () => {
	const dispatch = useDispatch();
	const { activeTour } = useStore();

	const createNewTour = tourData => dispatch(createTourThunk(tourData));

	const updateTour = tourData => {
		dispatch(editTourThunk(tourData));
	};

	const fetchActiveTour = () => dispatch(fetchActiveTourThunk());
	const setActiveTour = tourId => dispatch(setActiveTourThunk(tourId));

	return { createNewTour, updateTour, fetchActiveTour, setActiveTour, activeTour };
};

export default useTour;
