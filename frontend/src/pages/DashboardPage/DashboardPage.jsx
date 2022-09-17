import React, { useState } from 'react';
import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import useAuth from 'hooks/useAuth.js';
import { useEffect } from 'react';
import BandPanel from 'components/band/BandPanel/BandPanel.jsx';

const DashboardPage = ({}) => {
	const { user, config } = useAuth();

	const fetchActiveBand = async () => {
		const response = await axios.get(endpoints.bands(user.activeBandId), config);
		console.log(response.data);
	};

	useEffect(fetchActiveBand, []);

	return (
		<>
			<h3>Dashboard</h3>
			<BandPanel />
		</>
	);
};

export default DashboardPage;
