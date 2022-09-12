import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { bandsRequest } from 'utils/requests.js';

const HomePage = () => {
	// The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
	// The "token" value is the JWT token that you will send in the header of any request requiring authentication
	//TODO: Add an AddCars Page to add a car for a logged in user's garage
	const [user, token] = useAuth();
	const [activeBand, setActiveBand] = useState({ name: '', tours: [], users: [] });

	useEffect(() => {
		const fetchActiveBand = async () => {
			try {
				let response = await axios.get(bandsRequest(user.active_band_id), {
					headers: {
						Authorization: 'Bearer ' + token,
					},
				});
				setActiveBand(response.data);
			} catch (error) {
				console.log(error.response.data);
			}
		};
		fetchActiveBand();
	}, [token]);
	return (
		<div className='container'>
			<h1>{activeBand.name}</h1>
			<h3>Tours</h3>
			{activeBand.tours.map(tour => (
				<p key={tour.name}>{tour.name}</p>
			))}
			<h3>Users</h3>
			{activeBand.users.map(user => (
				<p key={user.username}>{user.email}</p>
			))}
		</div>
	);
};

export default HomePage;
