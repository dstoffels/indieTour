import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrevPage } from '../Components/Pages/navSlice.js';

const usePrevPage = page => {
	const dispatch = useDispatch();
	useEffect(
		() => () => {
			dispatch(setPrevPage(page));
		},
		[],
	);
};

export default usePrevPage;
