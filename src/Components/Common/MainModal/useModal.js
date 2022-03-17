import DeleteBandModal from 'Components/Pages/Console/Bands/DeleteBandModal/DeleteBandModal.jsx';
import EditBandModal from 'Components/Pages/Console/Bands/EditBandModal/EditBandModal.jsx';
import NewBandModal from 'Components/Pages/Console/Bands/NewBandModal/NewBandModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { showDeleteModal } from '../DeleteModal/deleteModalSlice.js';
import { showModal } from './mainModalSlice.js';

const useModal = () => {
	const dispatch = useDispatch();
	const { mainModal, deleteModal } = useSelector(state => state);

	const openMainModal = modal => dispatch(showModal(modal));
	const closeMainModal = () => dispatch(showModal(''));

	const openDeleteModal = modal => dispatch(showDeleteModal(modal));
	const closeDeleteModal = () => dispatch(showDeleteModal(''));

	const modalKeys = {
		newBand: 'newBand',
		editBand: 'editBand',
		delBand: 'delBand',

		newTour: 'newTour',
		editTour: 'editTour',
		delTour: 'delTour',
	};

	const modals = {
		[modalKeys.newBand]: <NewBandModal />,
		[modalKeys.editBand]: <EditBandModal />,
		[modalKeys.delBand]: <DeleteBandModal />,

		[modalKeys.newTour]: 'newTour',
		[modalKeys.editTour]: 'editTour',
		[modalKeys.delTour]: 'delTour',
	};

	return {
		modalKeys,
		modals,
		mainModal,
		openMainModal,
		closeMainModal,
		deleteModal,
		openDeleteModal,
		closeDeleteModal,
	};
};

export default useModal;
