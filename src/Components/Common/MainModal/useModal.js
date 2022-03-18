import DeleteBandModal from 'Components/Pages/Console/Bands/DeleteBandModal/DeleteBandModal.jsx';
import EditBandModal from 'Components/Pages/Console/Bands/EditBandModal/EditBandModal.jsx';
import NewBandModal from 'Components/Pages/Console/Bands/NewBandModal/NewBandModal.jsx';
import DeleteTourModal from 'Components/Pages/Console/Tours/DeleteTourModal/DeleteTourModal.jsx';
import EditTourModal from 'Components/Pages/Console/Tours/EditTourModal/EditTourModal.jsx';
import NewTourModal from 'Components/Pages/Console/Tours/NewTourModal/NewTourModal.jsx';
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

		[modalKeys.newTour]: <NewTourModal />,
		[modalKeys.editTour]: <EditTourModal />,
		[modalKeys.delTour]: <DeleteTourModal />,
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
