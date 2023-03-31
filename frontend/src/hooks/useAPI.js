import axios from 'axios';
import { getConfigObj } from 'redux/userSlice.js';
import useAuth, { useJWT } from './useAuth.js';

const DOMAIN = process.env.REACT_APP_API_DOMAIN;
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const GAPI = `${DOMAIN}/gapi`;
const MAPS = `${GAPI}/maps`;
const PLACE = `${MAPS}/place`;
const API = `${DOMAIN}/api`;
const AUTH = `${API}/auth`;
const BAND = `${API}/band`;
const TOUR = `${API}/tour`;
const DATE = `${API}/date`;
const PROSPECT = `${API}/prospect`;
const VENUE = `${API}/venue`;
const CONTACT = `${API}/contact`;

const useAPI = () => {
	const config = useJWT();

	const get = async url => {
		try {
			const response = await axios.get(url, config);
			return response;
		} catch (error) {
			console.error(error.response.data);
		}
	};

	const post = async (url, body, jwt = true) => {
		try {
			const response = await axios.post(url, body, jwt ? config : null);
			return response;
		} catch (error) {
			console.error(error.response.data);
		}
	};
	const patch = async (url, body) => {
		try {
			const response = await axios.patch(url, body, config);
			return response;
		} catch (error) {
			console.error(error.response.data);
		}
	};

	const deleteRequest = async url => {
		try {
			const response = await axios.delete(url, config);
			return response;
		} catch (error) {
			console.error(error.response.data);
		}
	};

	return {
		auth: {
			register: {
				post: async formData => await post(`${AUTH}/register`, formData, false),
			},
			login: {
				post: async credentials => await post(`${AUTH}/login`, credentials),
			},
			user: {
				patch: async body => await patch(`${AUTH}/user`, body),
				get: async user_id => await get(`${AUTH}/user/${user_id}`),
			},
		},
		band: {
			post: async body => await post(BAND, body),
			get_all: async () => await get(BAND),
			active: {
				post: async band_id => await post(`${BAND}/active`, { band_id }),
				get: async () => await get(`${BAND}/active`),
			},
			detail: {
				get: async band_id => await get(`${BAND}/${band_id}`),
				patch: async (band_id, body) => await patch(`${BAND}/${band_id}`, body),
				delete: async band_id => await deleteRequest(`${BAND}/${band_id}`),
				tours: {
					post: async (band_id, body) => await post(`${BAND}/${band_id}/tours`, body),
					get: async band_id => await get(`${BAND}/${band_id}/tours`),
				},
				users: {
					post: async (band_id, body) => await post(`${BAND}/${band_id}/users`, body),
					get: async band_id => await post(`${BAND}/${band_id}/users`),
				},
			},
			user: {
				detail: {
					patch: async banduser_id => await patch(`${BAND}/user/${banduser_id}`),
					delete: async banduser_id => await deleteRequest(`${BAND}/user/${banduser_id}`),
				},
			},
		},

		tour: {
			active: {
				post: async tour_id => await post(`${TOUR}/active`, { tour_id }),
				get: async () => await get(`${TOUR}/active`),
			},
			detail: {
				get: async tour_id => await get(`${TOUR}/${tour_id}`),
				patch: async (tour_id, body) => await patch(`${TOUR}/${tour_id}`, body),
				delete: async tour_id => await deleteRequest(`${TOUR}/${tour_id}`),
				users: {
					get: async tour_id => await get(`${TOUR}/${tour_id}/users`),
					post: async (tour_id, body) => await post(`${TOUR}/${tour_id}/users`, body),
				},
				dates: {
					get: async tour_id => await get(`${TOUR}/${tour_id}/dates`),
					post: async (tour_id, body) => await post(`${TOUR}/${tour_id}/dates`, body),
				},
			},
			user: {
				detail: {
					delete: async touruser_id => await deleteRequest(`${TOUR}/user/${touruser_id}`),
				},
			},
		},
		date: {
			detail: {
				get: async date_id => await get(`${DATE}/${date_id}`),
				patch: async (date_id, body) => await patch(`${DATE}/${date_id}`, body),
				delete: async date_id => await deleteRequest(`${DATE}/${date_id}`),
				schedule: {
					get: async date_id => await get(`${DATE}/${date_id}/schedule`),
					post: async (date_id, body) => await post(`${DATE}/${date_id}/schedule`, body),
				},
				contacts: {
					get: async date_id => await get(`${DATE}/${date_id}/contacts`),
					post: async (date_id, body) => await post(`${DATE}/${date_id}/contacts`, body),
				},
				prospects: {
					get: async date_id => await get(`${DATE}/${date_id}/prospects`),
					post: async (date_id, body) => await post(`${DATE}/${date_id}/prospects`, body),
				},
			},
			timeslot: {
				detail: {
					get: async timeslot_id => await get(`${DATE}/timeslot/${timeslot_id}`),
					patch: async (timeslot_id, body) => await patch(`${DATE}/timeslot/${timeslot_id}`, body),
					delete: async timeslot_id => await deleteRequest(`${DATE}/timeslot/${timeslot_id}`),
				},
			},
		},
		prospect: {
			detail: {
				get: async prospect_id => await get(`${PROSPECT}/${prospect_id}`),
				patch: async (prospect_id, body) => await patch(`${PROSPECT}/${prospect_id}`, body),
				delete: async prospect_id => await deleteRequest(`${PROSPECT}/${prospect_id}`),
				log: {
					get: async prospect_id => await get(`${PROSPECT}/${prospect_id}/log`),
					post: async (prospect_id, body) => await post(`${PROSPECT}/${prospect_id}/log`, body),
				},
			},
			log_entry: {
				detail: {
					get: async log_entry_id => await get(`${PROSPECT}/log_entry${log_entry_id}`),
					patch: async (log_entry_id, body) =>
						await patch(`${PROSPECT}/log_entry${log_entry_id}`, body),
					delete: async log_entry_id => await deleteRequest(`${PROSPECT}/log_entry${log_entry_id}`),
				},
			},
		},
		venue: {
			get: async () => await get(VENUE),
			post: async body => await post(VENUE, body),
			detail: {
				get: async venue_id => await get(`${VENUE}/${venue_id}`),
				patch: async (venue_id, body) => await patch(`${VENUE}/${venue_id}`, body),
				delete: async venue_id => await deleteRequest(`${VENUE}/${venue_id}`),
			},
		},
		contact: {
			get: async () => await get(CONTACT),
			post: async body => await post(CONTACT, body),
			detail: {
				get: async contact_id => await get(`${CONTACT}/${contact_id}`),
				patch: async (contact_id, body) => await patch(`${CONTACT}/${contact_id}`, body),
				delete: async contact_id => await deleteRequest(`${CONTACT}/${contact_id}`),
				methods: {
					post: async (contact_id, body) => await post(`${CONTACT}/${contact_id}/methods`, body),
				},
			},
			method: {
				detail: {
					get: async method_id => await get(`${CONTACT}/method/${method_id}`),
					patch: async (method_id, body) => await patch(`${CONTACT}/method/${method_id}`, body),
					delete: async method_id => await deleteRequest(`${CONTACT}/method/${method_id}`),
				},
			},
		},
		gapi: {
			maps: {
				place: {
					autocomplete: {
						get: async query => await get(`${PLACE}/autocomplete?key=${KEY}&query=${query}`),
					},
					fromText: {
						get: async input => await get(`${PLACE}/findplacefromtext?key=${KEY}&input=${input}`),
					},
					details: {
						get: async place_id =>
							await get(`${PLACE}/autocomplete?key=${KEY}&place_id=${place_id}`),
					},
				},
			},
		},
	};
};
export default useAPI;
