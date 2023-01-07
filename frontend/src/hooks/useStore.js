import { useDispatch, useSelector } from 'react-redux';

const useStore = () => {
	const dispatch = useDispatch();
	const store = useSelector(state => state);
	const activeBand = store.activeBand;

	return { dispatch, store, activeBand };
};

export default useStore;
