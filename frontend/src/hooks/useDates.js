import { useGlobalState } from 'context/GlobalStateContext.js';
import useAPI from './useAPI.js';
import useTour from './useTour.js';

const useDates = (callback) => {
	const api = useAPI();

	const { activeTour, fetchUserActiveTour } = useTour();

	const { activeDate, setActiveDate } = useGlobalState();

	const fetchTourDates = () => {
		activeTour && api.tour.detail.dates.getAll(activeTour.id, callback);
	};

	const addTourDate = async (date, place_id, description) => {
		const response = place_id && (await api.gapi.maps.place.details.get(place_id));
		const place = response && response.data.result;
		place.description = description;
		console.log(place);
		api.tour.detail.dates.post(
			activeTour.id,
			{ date, place: response && response.data.result },
			(responseData) => {
				setActiveDate(responseData);
				fetchTourDates();
			},
		);
	};

	const getTourDate = (date_id) => {
		api.date.detail.get(date_id, setActiveDate);
	};

	const updateActiveDate = (dateData) => {
		console.log(dateData);
		api.date.detail.patch(activeDate?.id, dateData, setActiveDate);
	};

	const deleteActiveDate = () => {
		api.date.detail.delete(activeDate?.id, setActiveDate);
	};

	const fetchDateProspects = () => {
		api.date.detail.prospects.get_all(activeDate.id, callback);
	};

	const addProspect = (venueData) => {
		api.date.detail.prospects.post(activeDate.id, venueData, fetchDateProspects);
	};

	const addTimeslot = (timeslotData) => {
		api.date.detail.schedule.post(activeDate.id, timeslotData, setActiveDate);
	};

	const updateTimeslot = (timeslot_id, data) => {
		api.date.timeslot.detail.patch(timeslot_id, data, setActiveDate);
	};

	const deleteTimeslot = (timeslot_id) => {
		api.date.timeslot.detail.delete(timeslot_id, setActiveDate);
	};

	const withActiveDate = (jsx) => (activeDate ? jsx : null);

	return {
		activeDate,
		setActiveDate,
		fetchTourDates,
		addTourDate,
		getTourDate,
		updateActiveDate,
		deleteActiveDate,
		fetchDateProspects,
		addProspect,
		addTimeslot,
		updateTimeslot,
		deleteTimeslot,
		withActiveDate,
	};
};

export default useDates;
