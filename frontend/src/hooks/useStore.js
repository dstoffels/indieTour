import { useDispatch, useSelector } from 'react-redux';

const useStore = () => {
	const dispatch = useDispatch();
	const store = useSelector(state => state);
	const { activeBand, activeTour, modal } = store;

	return { dispatch, store, activeBand, activeTour, modal };
};

export default useStore;
