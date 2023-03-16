import { useDispatch } from 'react-redux';
import { setFormData } from 'redux/formSlice.js';
import useStore from './useStore.js';

const useFormData = initValue => {
	const { dispatch, formData } = useStore();

	const initializeFormData = () => dispatch(setFormData(initValue));

	const handleChange = e => {
		e.persist();
		dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
	};

	return { formData, handleChange, initializeFormData };
};

export default useFormData;
