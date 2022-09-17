const DOMAIN = process.env.REACT_APP_API_DOMAIN;

const REGISTER = DOMAIN + 'auth/register/';
const LOGIN = DOMAIN + 'auth/login/';
const REFRESH = DOMAIN + 'auth/login/refresh/';

const activeBand = bandId => DOMAIN + `auth/active/band/${bandId}/`;
const activeTour = tourId => DOMAIN + `auth/active/tour/${tourId}/`;

const bands = (bandId = '') => `${DOMAIN}bands/${bandId && bandId}/`;
const tours = (bandId, tourId = '') => bands(bandId) + `tours/${tourId && tourId}/`;
const dates = (bandId, tourId, dateId = '') => tours(bandId, tourId) + `dates/${dateId && dateId}/`;

export default {
	REGISTER,
	LOGIN,
	REFRESH,
	activeBand,
	activeTour,
	bands,
	tours,
	dates,
};
