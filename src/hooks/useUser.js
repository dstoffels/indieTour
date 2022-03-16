import { useDispatch, useSelector } from 'react-redux';
import { setActiveBandAndGetMembers } from 'redux/userSlice.js';

const useUser = () => {
	const dispatch = useDispatch();
	const { user, bands } = useSelector(state => state);
	const role = user?.activeMember?.role;

	const selectBand = bandName => dispatch(setActiveBandAndGetMembers(bandName));

	const selectTour = tourName => {
		// add tours
	};

	return { user, role, selectBand };
};

export default useUser;
