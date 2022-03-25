import { useDispatch, useSelector } from 'react-redux';
import useTours from '../Console/Tours/useTours.js';
import {
	setActiveDate,
	setActiveEvent,
	setEditing,
	setPastDates,
	updateActiveDate,
} from './datesSlice.js';

const useDates = () => {
	const dispatch = useDispatch();
	const activeTourDates = useSelector(state => state.user?.activeMember?.activeTour?.dates);
	const { showPastDates, activeDate, editing, originalData, activeEvent } = useSelector(
		state => state.dateControls,
	);

	const events = activeDate?.timeslots;

	const unsavedChanges = JSON.stringify(activeDate) !== JSON.stringify(originalData);

	const selectTourDate = tourDate => dispatch(setActiveDate(tourDate));

	const deselectTourDate = () => dispatch(setActiveDate(null));

	const togglePastDates = () => dispatch(setPastDates(!showPastDates));

	const toggleEditMode = () => {
		dispatch(setEditing(!editing));
		dispatch(setActiveEvent(null));
	};

	const editActiveDate = data => dispatch(updateActiveDate(data));

	const revertActiveDate = () => {
		dispatch(setActiveDate(originalData));
		dispatch(setActiveEvent(null));
	};

	const selectEvent = event => dispatch(setActiveEvent(event));

	return {
		activeTourDates,
		showPastDates,
		activeDate,
		originalData,
		selectTourDate,
		togglePastDates,
		deselectTourDate,
		editing,
		toggleEditMode,
		unsavedChanges,
		editActiveDate,
		revertActiveDate,
		events,
		activeEvent,
		selectEvent,
	};
};

export default useDates;
