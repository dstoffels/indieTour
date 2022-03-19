import { fetchToken } from 'Components/Auth/Authentication/authSlice.js';

/**
 * Redux error handler for thunks
 * @param {BaseThunkAPI} thunkAPI
 * @param {} callback Must be async. Error handler produces token from state and passes it as first argument.
 */
const thunkErrorHandler = async (thunkAPI, callback) => {
	const { dispatch, getState } = thunkAPI;
	const { token } = getState();
	if (token) {
		try {
			await callback(token);
		} catch ({ response }) {
			console.log(response);
			switch (response.data) {
				case 'auth/id-token-expired':
					await dispatch(fetchToken());
					const newToken = getState().token;
					await callback(newToken);
					break;
				default:
					console.log(response.data);
			}
		}
	}
};

export default thunkErrorHandler;