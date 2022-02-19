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
			return [...action.payload];
		case ADD:
			const newState = [...state, action.payload];
			localStorage.setItem('dates', JSON.stringify(newState));
			return newState;
		default:
			return state;
	}
}

export default dates;

// ACTION CREATORS

export function loadDates() {
	// FIXME: when backend API is built
	// const response = axios.get('');
	// const response = localStorage.getItem('dates');
	const response = ['hi'];
	return { type: LOAD, payload: response };
}

export function addDate(newDate) {
	return { type: ADD, payload: newDate };
}

export function updateDate(dateId) {}
