import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import axios from 'axios';
import PrivateRoute from '../../utils/PrivateRoute.js';

const HomePage = () => {
	// The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
	// The "token" value is the JWT token that you will send in the header of any request requiring authentication
	//TODO: Add an AddCars Page to add a car for a logged in user's garage
	const [user, token] = useAuth();
	const [tours, setTours] = useState([]);
	console.log(user);

	useEffect(() => {
		const fetchTours = async () => {
			try {
				let response = await axios.get('http://127.0.0.1:8000/api/tours/', {
					headers: {
						Authorization: 'Bearer ' + token,
					},
				});
				setTours(response.data);
			} catch (error) {
				console.log(error.response.data);
			}
		};
		fetchTours();
	}, [token]);
	return (
		<PrivateRoute>
			<div className='container'>
				<h2>Welcome {user?.username}!</h2>
				<select>
					{tours && tours.map(tour => <option key={`tour-${tour.id}`}>{tour.name}</option>)}
				</select>
			</div>
		</PrivateRoute>
	);
};

export default HomePage;
