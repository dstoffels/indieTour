import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserBands } from './bandsSlice.js';

const useBands = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUserBands());
	}, []);

	const { bands } = useSelector(state => state);

	return { bands };
};

export default useBands;
