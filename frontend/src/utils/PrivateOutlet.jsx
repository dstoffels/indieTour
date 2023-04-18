import useAuth from 'hooks/useAuth.js';
import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateOutlet = () => {
	const { user } = useAuth();
	return user ? <Outlet /> : <Navigate to='' />;
};

export default PrivateOutlet;
