import axios from 'axios';
import { getJWTConfig } from './useAuth.js';

const DOMAIN = process.env.REACT_APP_API_DOMAIN;
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const GAPI = `${DOMAIN}/gapi`;
const MAPS = `${GAPI}/maps`;
const PLACE = `${MAPS}/place`;
const DIRECTIONS = `${MAPS}/directions`;
const API = `${DOMAIN}/api`;
const AUTH = `${API}/auth`;
const BAND = `${API}/band`;
const TOUR = `${API}/tour`;
const DATE = `${API}/date`;
const PROSPECT = `${API}/prospect`;
const VENUE = `${API}/venue`;
const CONTACT = `${API}/contact`;

/**
 * @returns An object containing nested http request functions for the api endpoints.
 * @callback
 * All request functions take in an optional void callback that's runs upon the successful completion of the request and receives the response data as its parameter
 * All request functions return the response if successful
 */
const useAPI = () => {
	const config = getJWTConfig();

	const get = async (url, callback, isProtected = true) => {
		try {
			const response = isProtected ? await axios.get(url, config) : await axios.get(url);
			callback && callback(response.data);

			return response;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	const post = async (url, body, callback, jwt = true) => {
		try {
			const response = await axios.post(url, body, jwt ? config : null);
			callback && callback(response.data);
			return response;
		} catch (error) {
			throw new Error(error.message);
		}
	};
	const patch = async (url, body, callback) => {
		try {
			const response = await axios.patch(url, body, config);
			callback && callback(response.data);
			return response;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	const deleteRequest = async (url, callback) => {
		try {
			const response = await axios.delete(url, config);
			callback && callback(response.data);
			return response;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	return {
		auth: {
			register: {
				post: async (formData, callback) =>
					await post(`${AUTH}/register`, formData, callback, false),
			},
			login: {
				post: async (credentials, callback) => await post(`${AUTH}/login`, credentials, callback),
			},
			user: {
				patch: async (body, token) => await axios.patch(`${AUTH}/user`, body, getJWTConfig(token)),
				get: async (user_id, callback) => await get(`${AUTH}/user/${user_id}`, callback, false),
			},
		},
		band: {
			post: async (body, callback) => await post(BAND, body, callback),
			get_all: async (callback) => await get(BAND, callback),
			active: {
				post: async (band_id, callback) => await post(`${BAND}/active`, { band_id }, callback),
				get: async (callback) => await get(`${BAND}/active`, callback),
			},
			detail: {
				get: async (band_id, callback) => await get(`${BAND}/${band_id}`, callback),
				patch: async (band_id, body, callback) => await patch(`${BAND}/${band_id}`, body, callback),
				delete: async (band_id, callback) => await deleteRequest(`${BAND}/${band_id}`, callback),
				tours: {
					post: async (band_id, body, callback) =>
						await post(`${BAND}/${band_id}/tours`, body, callback),
					get: async (band_id, callback) => await get(`${BAND}/${band_id}/tours`, callback),
				},
				users: {
					post: async (band_id, body, callback) =>
						await post(`${BAND}/${band_id}/users`, body, callback),
					get_all: async (band_id, callback) => await get(`${BAND}/${band_id}/users`, callback),
				},
			},
			user: {
				detail: {
					patch: async (banduser_id, body, callback) =>
						await patch(`${BAND}/user/${banduser_id}`, body, callback),
					delete: async (banduser_id, callback) =>
						await deleteRequest(`${BAND}/user/${banduser_id}`, callback),
				},
			},
		},

		tour: {
			active: {
				post: async (tour_id, callback) => await post(`${TOUR}/active`, { tour_id }, callback),
				get: async (callback) => await get(`${TOUR}/active`, callback),
			},
			detail: {
				get: async (tour_id, callback) => await get(`${TOUR}/${tour_id}`, callback),
				patch: async (tour_id, body, callback) => await patch(`${TOUR}/${tour_id}`, body, callback),
				delete: async (tour_id, callback) => await deleteRequest(`${TOUR}/${tour_id}`, callback),
				users: {
					get: async (tour_id, callback) => await get(`${TOUR}/${tour_id}/users`, callback),
					post: async (tour_id, body, callback) =>
						await post(`${TOUR}/${tour_id}/users`, body, callback),
				},
				dates: {
					getAll: async (tour_id, callback) => await get(`${TOUR}/${tour_id}/dates`, callback),
					post: async (tour_id, body, callback) =>
						await post(`${TOUR}/${tour_id}/dates`, body, callback),
				},
			},
			user: {
				detail: {
					delete: async (touruser_id, callback) =>
						await deleteRequest(`${TOUR}/user/${touruser_id}`, callback),
				},
			},
		},
		date: {
			detail: {
				get: async (date_id, callback) => await get(`${DATE}/${date_id}`, callback),
				patch: async (date_id, body, callback) => await patch(`${DATE}/${date_id}`, body, callback),
				delete: async (date_id, callback) => await deleteRequest(`${DATE}/${date_id}`, callback),
				schedule: {
					get: async (date_id, callback) => await get(`${DATE}/${date_id}/schedule`, callback),
					post: async (date_id, body, callback) =>
						await post(`${DATE}/${date_id}/schedule`, body, callback),
				},
				contacts: {
					get: async (date_id, callback) => await get(`${DATE}/${date_id}/contacts`, callback),
					post: async (date_id, body, callback) =>
						await post(`${DATE}/${date_id}/contacts`, body, callback),
				},
				prospects: {
					get_all: async (date_id, callback) => await get(`${DATE}/${date_id}/prospects`, callback),
					post: async (date_id, body, callback) =>
						await post(`${DATE}/${date_id}/prospects`, body, callback),
				},
			},
			timeslot: {
				detail: {
					get: async (timeslot_id, callback) =>
						await get(`${DATE}/timeslot/${timeslot_id}`, callback),
					patch: async (timeslot_id, body, callback) =>
						await patch(`${DATE}/timeslot/${timeslot_id}`, body, callback),
					delete: async (timeslot_id, callback) =>
						await deleteRequest(`${DATE}/timeslot/${timeslot_id}`, callback),
				},
			},
		},
		prospect: {
			detail: {
				get: async (prospect_id, callback) => await get(`${PROSPECT}/${prospect_id}`, callback),
				patch: async (prospect_id, body, callback) =>
					await patch(`${PROSPECT}/${prospect_id}`, body, callback),
				delete: async (prospect_id, callback) =>
					await deleteRequest(`${PROSPECT}/${prospect_id}`, callback),
				log: {
					get: async (prospect_id, callback) =>
						await get(`${PROSPECT}/${prospect_id}/log`, callback),
					post: async (prospect_id, body, callback) =>
						await post(`${PROSPECT}/${prospect_id}/log`, body, callback),
				},
			},
			log_entry: {
				detail: {
					get: async (log_entry_id, callback) =>
						await get(`${PROSPECT}/log_entry/${log_entry_id}`, callback),
					patch: async (log_entry_id, body, callback) =>
						await patch(`${PROSPECT}/log_entry/${log_entry_id}`, body, callback),
					delete: async (log_entry_id, callback) =>
						await deleteRequest(`${PROSPECT}/log_entry/${log_entry_id}`, callback),
				},
			},
		},
		venue: {
			get_all: async (callback) => await get(VENUE, callback),
			post: async (body, callback) => await post(VENUE, body, callback),
			detail: {
				get: async (venue_id, callback) => await get(`${VENUE}/${venue_id}`, callback),
				patch: async (venue_id, body, callback) =>
					await patch(`${VENUE}/${venue_id}`, body, callback),
				delete: async (venue_id, callback) => await deleteRequest(`${VENUE}/${venue_id}`, callback),
			},
		},
		contact: {
			get_all: async (callback) => await get(CONTACT, callback),
			post: async (body, callback) => await post(CONTACT, body, callback),
			detail: {
				get: async (contact_id, callback) => await get(`${CONTACT}/${contact_id}`, callback),
				patch: async (contact_id, body, callback) =>
					await patch(`${CONTACT}/${contact_id}`, body, callback),
				delete: async (contact_id, callback) =>
					await deleteRequest(`${CONTACT}/${contact_id}`, callback),
				methods: {
					post: async (contact_id, body, callback) =>
						await post(`${CONTACT}/${contact_id}/methods`, body, callback),
				},
			},
			method: {
				detail: {
					get: async (method_id, callback) => await get(`${CONTACT}/method/${method_id}`, callback),
					patch: async (method_id, body, callback) =>
						await patch(`${CONTACT}/method/${method_id}`, body, callback),
					delete: async (method_id, callback) =>
						await deleteRequest(`${CONTACT}/method/${method_id}`, callback),
				},
				options: {
					get: async (callback) => await get(`${CONTACT}/method/options`, callback),
				},
			},
		},
		gapi: {
			maps: {
				place: {
					autocomplete: {
						get: async (query, callback) =>
							await get(`${PLACE}/autocomplete?key=${KEY}&query=${query}`, callback),
					},
					fromText: {
						get: async (input, callback) =>
							await get(`${PLACE}/findplacefromtext?key=${KEY}&input=${input}`, callback),
					},
					details: {
						get: async (place_id, callback) =>
							await get(`${PLACE}/details?key=${KEY}&place_id=${place_id}`, callback),
					},
				},
				directions: {
					get: async (origin, destination, arrival_time, callback) =>
						await get(
							`${DIRECTIONS}?key=${KEY}&origin=${origin}&destination=${destination}&arrival_time=${arrival_time}`,
							callback,
						),
				},
			},
		},
	};
};
export default useAPI;
