// Simple async handler for awaiting resolved promises in redux state
export default ({ dispatch }) =>
	next =>
	action => {
		// Forwarding
		if (!action.payload || !action.payload.then) return next(action);

		// Handling
		action.payload.then(response => {
			const newAction = { ...action, payload: response };
			dispatch(newAction);
		});
	};
