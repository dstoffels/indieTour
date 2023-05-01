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

	const addTourDate = async (date, place) => {
		console.log(place);
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

	// PROSPECTS
	const fetchDateProspects = () => {
		api.date.detail.prospects.get_all(activeDate.id, callback);
	};

	const addProspect = async (place) => {
		api.date.detail.prospects.post(activeDate.id, place, fetchDateProspects);
	};

	// SCHEDULE
	const addTimeslot = (timeslotData) => {
		api.date.detail.schedule.post(activeDate.id, timeslotData, setActiveDate);
	};

	const updateTimeslot = (timeslot_id, data) => {
		api.date.timeslot.detail.patch(timeslot_id, data, setActiveDate);
	};

	const deleteTimeslot = (timeslot_id) => {
		api.date.timeslot.detail.delete(timeslot_id, setActiveDate);
	};

	const fetchTimeslotTypes = (callback) => {
		api.date.timeslot.types.get(callback);
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
		fetchTimeslotTypes,
		addDateContact,
		fetchDateContacts,
		withActiveDate,
	};
};

export default useDates;
