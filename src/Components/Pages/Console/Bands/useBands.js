import { useDispatch, useSelector } from 'react-redux';
import { setActiveBandAndGetMembers } from 'redux/userSlice.js';
import { showNewBandModal } from './NewBandModal/newBandModalSlice.js';
import { createNewBand, editBand } from './bandsSlice.js';
import { showEditBandModal } from './EditBandModal/EditBandModalSlice.js';

const useBands = () => {
	const dispatch = useDispatch();
	const { bands, members, newBandModal, editBandModal, user } = useSelector(state => state);
	const activeMember = user?.activeMember;

	const selectBand = bandName => dispatch(setActiveBandAndGetMembers(bandName));

	// New Band
	const openNewBandModal = () => dispatch(showNewBandModal(true));
	const closeNewBandModal = () => dispatch(showNewBandModal(false));
	const createBand = form => dispatch(createNewBand(form));

	// Edit Band
	const openEditBandModal = () => dispatch(showEditBandModal(true));
	const closeEditBandModal = () => dispatch(showEditBandModal(false));
	const updateBand = form => dispatch(editBand(form));

	return {
		bands,
		members,
		activeMember,
		selectBand,
		newBandModal,
		openNewBandModal,
		closeNewBandModal,
		createBand,
		editBandModal,
		openEditBandModal,
		closeEditBandModal,
		updateBand,
	};
};

export default useBands;
