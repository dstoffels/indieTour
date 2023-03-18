const DOMAIN = process.env.REACT_APP_API_DOMAIN;

const REGISTER_USER = DOMAIN + 'auth/register/';
const LOGIN = DOMAIN + 'auth/login/';
const REFRESH = DOMAIN + 'auth/login/refresh/';
const USER = DOMAIN + 'auth/user/';

const user = (uid = '') => `${USER}${uid && uid + '/'}`;
const bands = (bandId = '') => `${DOMAIN}bands/${bandId && bandId + '/'}`;
const activeBand = (bandId = '') => bands(bandId) + 'active/';
const bandusers = (bandId, banduserId = '') =>
	bands(bandId) + `users/${banduserId && banduserId + '/'}`;
const tours = (bandId, tourId = '') => bands(bandId) + `tours/${tourId && tourId + '/'}`;
const tourusers = (bandId, tourId, banduserId = '') =>
	tours(bandId, tourId) + `users/${banduserId && banduserId + '/'}`;
const activeTour = (bandId, tourId = '') => tours(bandId, tourId) + 'active/';
const dates = (bandId, tourId, dateId = '') =>
	tours(bandId, tourId) + `dates/${dateId && dateId + '/'}`;

export default {
	REGISTER_USER,
	LOGIN,
	REFRESH,
	USER,
	bands,
	activeBand,
	bandusers,
	tours,
	tourusers,
	activeTour,
	dates,
	user,
};
