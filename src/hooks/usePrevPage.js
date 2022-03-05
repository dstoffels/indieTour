import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setPrevPage } from '../Components/Common/BottomNav/navSlice.js';

const useNav = page => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setPage(page));
		return () => dispatch(setPrevPage(page));
	}, []);
};

export default useNav;
