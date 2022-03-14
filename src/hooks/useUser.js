import { useDispatch, useSelector } from 'react-redux';
import { setActiveBand } from 'redux/userSlice.js';

const useUser = () => {
	const dispatch = useDispatch();
	const { user, bands } = useSelector(state => state);

	const selectBand = bandName => dispatch(setActiveBand(bandName));

	const selectTour = tourName => {
		// add tours
	};

	return { user, selectBand };
};

export default useUser;
