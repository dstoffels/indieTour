import { useDispatch, useSelector } from 'react-redux';
import { showBandModal } from './bandModalSlice.js';

const useBandModal = () => {
	const dispatch = useDispatch();
	const { bandModal } = useSelector(state => state);

	const closeBandModal = () => dispatch(showBandModal(false));
	const openBandModal = () => dispatch(showBandModal(true));

	return { bandModal, closeBandModal, openBandModal };
};

export default useBandModal;
