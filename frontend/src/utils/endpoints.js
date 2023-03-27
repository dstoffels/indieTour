const DOMAIN = process.env.REACT_APP_API_DOMAIN;
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const API = `${DOMAIN}/api/`;
const REGISTER_USER = API + 'auth/register/';
const LOGIN = API + 'auth/login/';
const REFRESH = API + 'auth/login/refresh/';
const USER = API + 'auth/user/';
const GAPI = DOMAIN + 'gapi';

const placesAutocomplete = query => `${GAPI}/places/autocomplete/?key=${KEY}&query=${query}/`;
const places = input => `${GAPI}/places/?key=${KEY}&input=${input}`;

const user = (uid = '') => `${USER}${uid && uid + '/'}`;
const bands = (bandId = '') => `${API}bands/${bandId && bandId + '/'}`;
const activeBand = (bandId = '') => bands(bandId) + 'active/';
const bandusers = (bandId, banduserId = '') =>
	bands(bandId) + `users/${banduserId && banduserId + '/'}`;
const tours = (bandId, tourId = '') => bands(bandId) + `tours/${tourId && tourId + '/'}`;
const tourusers = (bandId, tourId, banduserId = '') =>
	tours(bandId, tourId) + `users/${banduserId && banduserId + '/'}`;
const activeTour = (bandId, tourId = '') => tours(bandId, tourId) + 'active/';
const dates = (bandId, tourId, dateId = '') =>
	tours(bandId, tourId) + `dates/${dateId && dateId + '/'}`;
const timeslots = (bandId, tourId, dateId, timeslotId = '') =>
	dates(bandId, tourId, dateId) + `timeslots/${timeslotId && timeslotId + '/'}`;

export default {
	DOMAIN,
	REGISTER_USER,
	LOGIN,
	REFRESH,
	USER,
	placesAutocomplete,
	places,
	bands,
	activeBand,
	bandusers,
	tours,
	tourusers,
	activeTour,
	dates,
	timeslots,
	user,
};
