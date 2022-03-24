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
		} catch (error) {
			if (!error.response) throw error;

			switch (error.response) {
				case 'auth/id-token-expired':
					await dispatch(fetchToken());
					const newToken = getState().token;
					await callback(newToken);
					break;
				default:
					console.log(error);
			}
		}
	}
};

export default thunkErrorHandler;
