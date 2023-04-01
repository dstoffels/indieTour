import { useDispatch } from 'react-redux';
import { storeActiveDate } from 'redux/dateSlice.js';
import useStore from './useStore.js';
import useAPI from './useAPI.js';

const useDates = () => {
	const dispatch = useDispatch();
	const dispatchActiveDate = tourdate => dispatch(storeActiveDate(tourdate));
	const { activeDate, activeTour } = useStore();

	const api = useAPI();

	const fetchTourDates = async callback => {
		const response = await api.tour.detail.dates.getAll(activeTour.id);
		callback(response.data);
	};

	const updateDate = async formData => {
		const response = await api.date.detail.patch(activeDate.id, formData);
		dispatchActiveDate(response.data);
	};

	const deleteDate = async dateId => {
		const response = await api.date.detail.delete(dateId);
		dispatchActiveDate(response.data);
	};

	const addTimeslot = async formData => {
		const response = await api.date.detail.schedule.post(activeDate.id, formData);
		dispatchActiveDate(response.data);
	};

	const updateTimeslot = async (formData, timeslot_id) => {
		const response = api.date.timeslot.detail.patch(timeslot_id, formData);
		dispatchActiveDate(response.data);
	};

	return {
		activeTour,
		activeDate,
		fetchTourDates,
		updateDate,
		deleteDate,
		addTimeslot,
		updateTimeslot,
	};
};

export default useDates;
