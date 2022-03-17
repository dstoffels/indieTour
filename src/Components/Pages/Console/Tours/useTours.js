import { useDispatch, useSelector } from 'react-redux';
import { setActiveTourAndFetchDates } from 'redux/userSlice.js';
import { showTourModal } from './NewTourModal/NewTourModalSlice.js';

const useTours = () => {
	const dispatch = useDispatch();
	const { tours, newTourModal } = useSelector(state => state);

	const selectTour = tourId => dispatch(setActiveTourAndFetchDates(tourId));

	const openNewTourModal = () => dispatch(showTourModal(true));
	const closeNewTourModal = () => dispatch(showTourModal(false));

	return { tours, selectTour, newTourModal, openNewTourModal, closeNewTourModal };
};

export default useTours;
