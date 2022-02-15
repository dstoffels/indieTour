// ACTION TYPES
const CALENDAR = 'Dates/CALENDAR';

// REDUCER
const DEFAULT_STATE = {
	calendarView: false,
};

function datesDisplayOptions(state = DEFAULT_STATE, action = {}) {
	switch (action.type) {
		case CALENDAR:
			return { ...state, calendarView: !state.calendarView };
		default:
			return state;
	}
}

export default datesDisplayOptions;

// ACTION CREATORS
export function toggleCalendarView() {
	return { type: CALENDAR };
}
