import { useGlobalState } from 'context/GlobalStateContext.js';
import useAPI from './useAPI.js';

const useBand = () => {
	const { activeBand, setActiveBand, isAdmin, isOwner } = useGlobalState();
	const api = useAPI();

	const fetchUserActiveBand = () => {
		api.band.active.get(setActiveBand);
	};

	const setUserActiveBand = (band_id) => {
		api.band.active.post(band_id, setActiveBand);
	};

	const fetchUserBands = (callback) => {
		api.band.get_all(callback);
	};

	const createNewBand = (bandData) => {
		api.band.post(bandData, setActiveBand);
	};

	const updateActiveBand = () => {
		api.band.detail.patch(activeBand.id, setActiveBand);
	};

	const deleteActiveBand = () => {
		api.band.detail.delete(activeBand.id, setActiveBand);
	};

	const addBandUser = (email) => {
		api.band.detail.users.post(activeBand.id, { email }, setActiveBand);
	};

	const updateBandUser = (banduser_id, banduserData) => {
		api.band.user.detail.patch(banduser_id, banduserData, setActiveBand);
	};

	const removeBandUser = (banduser_id) => {
		api.band.user.detail.delete(banduser_id, setActiveBand);
	};

	const withActiveBand = (jsx) => {
		return activeBand ? jsx : null;
	};

	return {
		activeBand,
		bandusers: activeBand?.users,
		isAdmin,
		isOwner,
		fetchUserActiveBand,
		setUserActiveBand,
		fetchUserBands,
		createNewBand,
		updateActiveBand,
		deleteActiveBand,
		addBandUser,
		updateBandUser,
		removeBandUser,
		withActiveBand,
	};
};

export default useBand;
