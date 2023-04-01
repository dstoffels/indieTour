import { useDispatch } from 'react-redux';
import { setBand } from 'redux/bandSlice.js';
import useStore from './useStore.js';
import useAPI from './useAPI.js';
import useAuth from './useAuth.js';

const useBand = () => {
	const { activeBand } = useStore();
	const { user } = useAuth();
	const dispatch = useDispatch();

	const dispatchActiveBand = band => dispatch(setBand(band));
	const api = useAPI();

	const setActiveBand = async band_id => {
		const response = await api.band.active.post(band_id);
		dispatchActiveBand(response.data);
	};

	const fetchActiveBand = async () => {
		const response = await api.band.active.get();
		dispatchActiveBand(response.data);
	};

	const updateActiveBand = async data => {
		const response = await api.band.detail.patch(activeBand.id, data);
		dispatchActiveBand(response.data);
	};

	const createNewBand = async bandData => {
		const response = await api.band.post(bandData);
		dispatchActiveBand(response.data);
	};

	const deleteActiveBand = async () => {
		const response = await api.band.detail.delete(activeBand.id);
		dispatchActiveBand(response.data);
	};

	const addBandUser = async userData => {
		const response = await api.band.detail.users.post(activeBand.id, userData);
		dispatchActiveBand(response.data);
	};

	const updateBanduser = async (banduser_id, userData) => {
		const response = await api.band.user.detail.patch(banduser_id, userData);
		dispatchActiveBand(response.data);
	};

	const deleteBanduser = async banduser_id => {
		const response = await api.band.user.detail.delete(banduser_id);
		dispatchActiveBand(response.data);
	};

	const isOwner = user?.id === activeBand?.owner?.id;
	const isAdmin =
		isOwner || activeBand?.users?.find(bandUser => bandUser.id === user?.id)?.is_admin;

	return {
		activeBand,
		isAdmin,
		isOwner,
		fetchActiveBand,
		setActiveBand,
		createNewBand,
		updateActiveBand,
		deleteActiveBand,
		addBandUser,
		updateBanduser,
		deleteBanduser,
	};
};

export default useBand;
