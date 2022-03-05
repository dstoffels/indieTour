import React from 'react';
import useLogin from '../../../hooks/useLogin.js';

const Home = props => {
	useLogin();
	return (
		<>
			<div className='text-center mt-4'>
				<h4>Welcome to indieTour!</h4>
			</div>
		</>
	);
};

export default Home;
