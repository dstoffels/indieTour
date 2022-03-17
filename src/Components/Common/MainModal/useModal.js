import { useSelector } from 'react-redux';
import { showDeleteModal } from '../DeleteModal/deleteModalSlice.js';
import { showModal } from './mainModalSlice.js';

const useModal = () => {
	const dispatch = useDispatch();
	const { mainModal, deleteModal } = useSelector();

	const closeMainModal = () => dispatch(showModal(false));
	const closeDeleteModal = () => dispatch(showDeleteModal(false));

	return { mainModal, closeMainModal, deleteModal, closeDeleteModal };
};

export default useModal;
