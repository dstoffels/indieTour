import { useEffect, useState } from 'react';
import useAPI from './useAPI.js';

const useBandusers = (activeBand) => {
	const [bandusers, setBandusers] = useState([]);
	const api = useAPI();

	useEffect(() => {
		api.band.detail.users.get_all(activeBand.id, setBandusers);
	}, [activeBand]);

	return { bandusers, setBandusers };
};

export default useBandusers;
