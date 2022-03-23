import { useDispatch, useSelector } from 'react-redux';
import { setActiveDate, setEditMode, setPastDates, updateActiveDate } from './datesSlice.js';

const useDates = () => {
	const dispatch = useDispatch();
	const { showPastDates, activeDate, editMode } = useSelector(state => state.dateControls);

	const selectTourDate = tourDate => dispatch(setActiveDate(tourDate));
	const deselectTourDate = () => dispatch(setActiveDate(null));
	const togglePastDates = () => dispatch(setPastDates(!showPastDates));
	const toggleEditMode = () => dispatch(setEditMode(!editMode));
	const editActiveDate = data => dispatch(updateActiveDate(data));

	return {
		showPastDates,
		activeDate,
		selectTourDate,
		togglePastDates,
		deselectTourDate,
		editMode,
		toggleEditMode,
		editActiveDate,
	};
};

export default useDates;
