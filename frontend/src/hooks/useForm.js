import TourForm from 'components/forms/tour/TourForm/TourForm.jsx';
import { useDispatch } from 'react-redux';
import { closeModal, setModalKey } from 'redux/modalSlice.js';

const useForm = () => {
	const dispatch = useDispatch();

	const formKeys = {
		newBand: 'newBand',
		newTour: 'newTour',
	};

	const forms = {
		newBand: null,
		newTour: <TourForm />,
	};

	const openForm = key => dispatch(setModalKey(key));
	const closeForm = () => dispatch(closeModal());

	return { formKeys, forms, openForm, closeForm };
};

export default useForm;
