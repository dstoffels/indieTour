import EditTourForm from 'components/forms/tour/EditTourForm/EditTourForm.jsx';
import NewBandForm from 'components/forms/band/NewBandForm/NewBandForm.jsx';
import EditBandForm from 'components/forms/band/EditBandForm/EditBandForm.jsx';
import NewTourForm from 'components/forms/tour/NewTourForm/NewTourForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, setModalKey, updateFormData } from 'redux/modalSlice.js';

const useForm = () => {
	const dispatch = useDispatch();
	const { formData } = useSelector(state => state.modal);

	const formKeys = {
		newBand: 'newBand',
		editBand: 'editBand',
		newTour: 'newTour',
		editTour: 'editTour',
	};

	const forms = {
		newBand: <NewBandForm />,
		editBand: <EditBandForm />,
		newTour: <NewTourForm />,
		editTour: <EditTourForm />,
	};

	const setFormData = newFormData => dispatch(updateFormData(newFormData));
	const openForm = (formKey, formData = null) => {
		dispatch(updateFormData(formData));
		dispatch(setModalKey(formKey));
	};
	const closeForm = () => dispatch(closeModal());
	const handleFormChange = event =>
		setFormData({ ...formData, [event.target.name]: event.target.value });

	return { formKeys, forms, openForm, closeForm, formData, setFormData, handleFormChange };
};

export default useForm;
