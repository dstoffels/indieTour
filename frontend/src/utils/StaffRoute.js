import React from 'react';
import useAuth from '../hooks/useAuth.js';

const HomePageRouter = ({}) => {
	const [user] = useAuth();
	return user.is_staff ? <EmployeeHomePage /> : <CustomerHomePage />;
};

export default HomePageRouter;
