import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSelectedDateIndex } from 'redux/dateSlice.js';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';
import useStore from './useStore.js';
import useTour from './useTour.js';

const useDates = () => {
	const dispatch = useDispatch();
	const { selectedDateIndex } = useStore();
	const { activeTour, fetchActiveTour } = useTour();

	const setActiveDate = index => dispatch(setSelectedDateIndex(index));
	const activeDate = activeTour.dates[selectedDateIndex];

	const config = getConfigObj();

	const updateDate = async formData => {
		try {
			await axios.patch(
				endpoints.dates(activeTour.band_id, activeTour.id, activeDate.id),
				formData,
				config,
			);
			fetchActiveTour();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	const deleteDate = async dateId => {
		try {
			await axios.delete(endpoints.dates(activeTour.band_id, activeTour.id, dateId), config);
			fetchActiveTour();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	const addTimeslot = async formData => {
		try {
			await axios.post(
				endpoints.timeslots(activeTour.band_id, activeTour.id, activeDate.id),
				formData,
				config,
			);
			fetchActiveTour();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	const updateTimeslot = async (formData, timeslotId) => {
		try {
			await axios.patch(
				endpoints.timeslots(activeTour.band_id, activeTour.id, activeDate.id, timeslotId),
				formData,
				config,
			);
			fetchActiveTour();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	return { activeDate, setActiveDate, updateDate, deleteDate, addTimeslot, updateTimeslot };
};

export default useDates;
