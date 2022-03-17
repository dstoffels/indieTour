import { useDispatch, useSelector } from 'react-redux';
import { setActiveTourAndFetchDates } from 'redux/userSlice.js';
import { showTourModal } from './NewTourModal/NewTourModalSlice.js';

const useTours = () => {
	const dispatch = useDispatch();
	const { user, tours, newTourModal } = useSelector(state => state);
	const { activeTour } = user;

	const selectTour = tourId => dispatch(setActiveTourAndFetchDates(tourId));

	// TODO: refactor for main/delete modals
	const openNewTourModal = () => dispatch(showTourModal(true));
	const closeNewTourModal = () => dispatch(showTourModal(false));

	return { tours, activeTour, selectTour, newTourModal, openNewTourModal, closeNewTourModal };
};

export default useTours;
