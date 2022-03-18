import { useDispatch, useSelector } from 'react-redux';
import { setActiveTourAndFetchDates } from 'redux/userSlice.js';
import { createNewTour, deleteActiveTour, editTour } from './toursSlice.js';

const useTours = () => {
	const dispatch = useDispatch();
	const { user, tours } = useSelector(state => state);
	const activeTour = user?.activeMember?.activeTour;

	const selectTour = tour => dispatch(setActiveTourAndFetchDates(tour));

	const createTour = form => dispatch(createNewTour(form));

	const updateTour = form => dispatch(editTour(form));

	const deleteTour = path => dispatch(deleteActiveTour(path));

	return { tours, activeTour, selectTour, createTour, updateTour, deleteTour };
};

export default useTours;
