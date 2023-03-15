import { useDispatch, useSelector } from 'react-redux';

const useStore = () => {
	const dispatch = useDispatch();
	const store = useSelector(state => state);
	const { activeBand, activeTour, modal, userBands } = store;

	return { dispatch, store, activeBand, userBands, activeTour, modal };
};

export default useStore;
