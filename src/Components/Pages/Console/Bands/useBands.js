import { useSelector } from 'react-redux';

const useBands = () => {
	const { bands } = useSelector(state => state);
	const { members } = useSelector(state => state);

	return { bands, members };
};

export default useBands;
