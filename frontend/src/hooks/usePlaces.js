import useAPI from './useAPI.js';

const usePlaces = () => {
	const api = useAPI();

	const fetchPlaceContacts = (place_id, callback) => {
		api.gapi.maps.place.details.contacts.get_all(place_id, callback);
	};

	const addPlaceContact = (place_id, contactData, callback) => {
		api.gapi.maps.place.details.contacts.post(place_id, contactData, callback);
	};

	return { fetchPlaceContacts, addPlaceContact };
};

export default usePlaces;
