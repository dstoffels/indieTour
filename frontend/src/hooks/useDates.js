import { useGlobalState } from 'context/GlobalStateContext.js';
import useAPI from './useAPI.js';
import useTour from './useTour.js';
import { useEffect } from 'react';

const useDates = (callback) => {
	const api = useAPI();

	const { activeTour, fetchUserActiveTour } = useTour();

	useEffect(() => {
		!activeTour && fetchUserActiveTour();
	}, []);

	const { activeDate, setActiveDate } = useGlobalState();

	const fetchTourDates = () => {
		activeTour && api.tour.detail.dates.getAll(activeTour.id, callback);
	};

	const parsePlace = (place) => {
		const { terms, place_id, description } = place;
		let political_location = terms
			.reverse()
			.filter((term, i) => i < 3)
			.reverse()
			.map(({ value }) => value)
			.join(', ');

		const { main_text } = place.structured_formatting;

		return { place_id, political_location, title: main_text, location: description };
	};

	const addTourDate = (date, place) => {
		const data = { date, ...parsePlace(place) };
		api.tour.detail.dates.post(activeTour.id, data, (responseData) => {
			setActiveDate(responseData);
			fetchTourDates();
		});
	};

	const getTourDate = (date_id) => {
		api.date.detail.get(date_id, setActiveDate);
	};

	const updateActiveDate = (dateData) => {
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

	const withActiveDate = (jsx) => (activeDate ? jsx : null);

	return {
		activeDate,
		fetchTourDates,
		addTourDate,
		getTourDate,
		updateActiveDate,
		deleteActiveDate,
		fetchDateProspects,
		addProspect,
		withActiveDate,
	};
};

export default useDates;
