import { useDispatch, useSelector } from 'react-redux';

const useStore = () => {
	const dispatch = useDispatch();
	const store = useSelector(state => state);
	const { activeBand, activeTour, modal, userBands, formData, user } = store;

	return { dispatch, store, activeBand, userBands, activeTour, modal, formData, user };
};

export default useStore;
