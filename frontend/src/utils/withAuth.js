import useAuth from 'hooks/useAuth.js';
import React, { useState } from 'react';

const withAuth = Component => props => {
	const { user } = useAuth();
	return user ? <Component {...props} /> : null;
};

export default withAuth;
