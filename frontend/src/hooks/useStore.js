import { useDispatch, useSelector } from 'react-redux';

const useStore = () => {
	const dispatch = useDispatch();
	const store = useSelector(state => state);
	const { activeBand, activeTour, modal, userBands, formData, user, selectedDateIndex } = store;

	return {
		dispatch,
		store,
		activeBand,
		userBands,
		activeTour,
		modal,
		formData,
		user,
		selectedDateIndex,
	};
};

export default useStore;
