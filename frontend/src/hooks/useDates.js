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

	const generatePlace = async (place) => {
		const { place_id, description } = place;
		const response = place && (await api.gapi.maps.place.details.get(place_id));
		place = response && response.data.result;
		place.description = description;
		return place;
	};

	const addTourDate = async (date, place) => {
		place = await generatePlace(place);
		api.tour.detail.dates.post(activeTour.id, { date, place }, (responseData) => {
			setActiveDate(responseData);
			fetchTourDates();
		});
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

	const addProspect = async (place) => {
		console.log(place);
		place = await generatePlace(place);
		api.date.detail.prospects.post(activeDate.id, place, fetchDateProspects);
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

	// DATE CONTACTS
	const fetchDateContacts = (callback) => {
		api.date.detail.contacts.get(activeDate.id, callback);
	};

	const addDateContact = (contactData, callback) => {
		api.date.detail.contacts.post(activeDate.id, contactData, callback);
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
		addDateContact,
		fetchDateContacts,
		withActiveDate,
	};
};

export default useDates;
