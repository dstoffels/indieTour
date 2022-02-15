import axios from 'axios';

// ACTION TYPES
const LOAD = 'DatesList/LOAD';
const ADD = 'DatesList/ADD';
const UPDATE = 'DatesList/UPDATE';
const DELETE = 'DatesList/DELETE';

// REDUCER
function dates(state = [], action = {}) {
	switch (action.type) {
		case LOAD:
			return [...action.payload.data];
		case ADD:
			return [...state, action.payload];
		default:
			return state;
	}
}

export default dates;

// ACTION CREATORS

export function loadDates() {
	const response = axios.get('http://www.devcodecampmusiclibrary.com/api/music');
	return { type: LOAD, payload: response };
}

export function addDate(newDate) {
	return { type: ADD, payload: newDate };
}

export function updateDate(dateId) {}
