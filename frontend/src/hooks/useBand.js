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
import endpoints from 'utils/endpoints.js';
import useStore from './useStore.js';
import useAPI from './useAPI.js';

const useBand = () => {
	const dispatch = useDispatch();
	const { activeBand, userBands, user } = useStore();

	const createNewBand = bandData => dispatch(createNewBandThunk(bandData));

	const editBand = bandData => dispatch(editBandThunk(bandData));

	const deleteBand = bandId => dispatch(deleteBandThunk(bandId));

	const fetchActiveBand = () => dispatch(fetchActiveBandThunk());
	const fetchUserBands = () => dispatch(fetchUserBandsThunk());
	const setActiveband = bandId => dispatch(setActiveBandThunk(bandId));

	const api = useAPI();

	const handleBandPatch = async data => {
		const response = await api.band.detail.patch(activeBand.id, data);
		fetchActiveBand();
		fetchUserBands();
		return null;
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
