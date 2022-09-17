import { useDispatch, useSelector } from 'react-redux';

const useStore = () => {
	const dispatch = useDispatch();
	const store = useSelector(state => state);
	return { dispatch, store };
};

export default useStore;
