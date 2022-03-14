import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setPrevPage } from 'Components/Common/BottomNav/navSlice.js';

const useNav = page => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setPage(page));
		return () => dispatch(setPrevPage(page));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useNav;
