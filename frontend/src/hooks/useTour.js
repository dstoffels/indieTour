import { useDispatch } from 'react-redux';
import { createTour, editTourThunk } from '../redux/tourSlice.js';

const useTour = () => {
	const dispatch = useDispatch();

	const createNewTour = tourData => dispatch(createTour(tourData));
	const updateTour = tourData => {
		dispatch(editTourThunk(tourData));
	};

	return { createNewTour, updateTour };
};

export default useTour;
