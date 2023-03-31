import { useDispatch } from 'react-redux';
import { setSelectedDateIndex } from 'redux/dateSlice.js';
import useStore from './useStore.js';
import useTour from './useTour.js';
import useAPI from './useAPI.js';

const useDates = () => {
	const dispatch = useDispatch();
	const { selectedDateIndex } = useStore();
	const { activeTour, fetchActiveTour } = useTour();

	const setActiveDate = index => dispatch(setSelectedDateIndex(index));
	const activeDate = activeTour.dates[selectedDateIndex];

	const api = useAPI();

	const updateDate = async formData => {
		const response = await api.date.detail.patch(activeDate.id, formData);
		fetchActiveTour();
	};

	const deleteDate = async dateId => {
		const response = await api.date.detail.delete(dateId);
		fetchActiveTour();
	};

	const addTimeslot = async formData => {
		const response = await api.date.detail.schedule.post(activeDate.id, formData);
		fetchActiveTour();
	};

	const updateTimeslot = async (formData, timeslot_id) => {
		const response = api.date.timeslot.detail.patch(timeslot_id, formData);
		fetchActiveTour();
	};

	return { activeDate, setActiveDate, updateDate, deleteDate, addTimeslot, updateTimeslot };
};

export default useDates;
