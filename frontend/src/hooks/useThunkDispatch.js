import useAuth from './useAuth.js';
import useStore from './useStore.js';

const { fetchActiveBand } = require('redux/bandSlice.js');

const useThunkDispatch = () => {
	const { dispatch } = useStore();
	const { config } = useAuth();

	const getActiveBand = () => dispatch(fetchActiveBand(config));
	return { getActiveBand };
};

export default useThunkDispatch;
