import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
	createNewBandThunk,
	deleteBandThunk,
	editBandThunk,
	fetchActiveBandThunk,
	setActiveBandThunk,
} from 'redux/bandSlice.js';
import { fetchUserBandsThunk } from 'redux/userBandSlice.js';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';
import useStore from './useStore.js';

const useBand = () => {
	const dispatch = useDispatch();
	const { activeBand, userBands, user } = useStore();

	const createNewBand = bandData => dispatch(createNewBandThunk(bandData));

	const editBand = bandData => dispatch(editBandThunk(bandData));

	const deleteBand = bandId => dispatch(deleteBandThunk(bandId));

	const fetchActiveBand = () => dispatch(fetchActiveBandThunk());
	const fetchUserBands = () => dispatch(fetchUserBandsThunk());
	const setActiveband = bandId => dispatch(setActiveBandThunk(bandId));

	const handleBandPatch = async data => {
		const config = getConfigObj();
		try {
			const response = await axios.patch(endpoints.bands(activeBand.id), data, config);
			fetchActiveBand();
			fetchUserBands();
			return null;
		} catch (error) {
			return error.response.data;
		}
	};

	const isOwner = user?.id === activeBand?.owner?.id;
	const isAdmin =
		isOwner || activeBand?.users?.find(bandUser => bandUser.id === user?.id)?.is_admin;

	return {
		activeBand,
		userBands,
		fetchActiveBand,
		setActiveband,
		fetchUserBands,
		createNewBand,
		editBand,
		deleteBand,
		handleBandPatch,
		isAdmin,
		isOwner,
	};
};

export default useBand;
