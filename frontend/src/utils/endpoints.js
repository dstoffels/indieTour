const DOMAIN = process.env.REACT_APP_API_DOMAIN;

const REGISTER_USER = DOMAIN + 'auth/register/';
const LOGIN = DOMAIN + 'auth/login/';
const REFRESH = DOMAIN + 'auth/login/refresh/';
const EDIT_USER = DOMAIN + 'auth/user/';

const bands = (bandId = '') => `${DOMAIN}bands/${bandId && bandId + '/'}`;
const activeBand = (bandId = '') => bands(bandId) + 'active/';
const tours = (bandId, tourId = '') => bands(bandId) + `tours/${tourId && tourId}/`;
const dates = (bandId, tourId, dateId = '') => tours(bandId, tourId) + `dates/${dateId && dateId}/`;

export default {
	REGISTER_USER,
	LOGIN,
	REFRESH,
	EDIT_USER,
	bands,
	activeBand,
	tours,
	dates,
};
