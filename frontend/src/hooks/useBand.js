import { useDispatch } from 'react-redux';
import {
	createNewBandThunk,
	deleteBandThunk,
	editBandThunk,
	fetchActiveBandThunk,
} from 'redux/bandSlice.js';
import useStore from './useStore.js';

const useBand = () => {
	const dispatch = useDispatch();
	const { activeBand, userBands } = useStore();

	const createNewBand = bandData => dispatch(createNewBandThunk(bandData));

	const editBand = bandData => dispatch(editBandThunk(bandData));

	const deleteBand = bandId => dispatch(deleteBandThunk(bandId));

	const fetchActiveBand = () => dispatch(fetchActiveBandThunk());

	return { activeBand, userBands, fetchActiveBand, createNewBand, editBand, deleteBand };
};

export default useBand;
