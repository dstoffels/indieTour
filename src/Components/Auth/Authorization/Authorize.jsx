import { MEMBER } from 'constants/roles.js';
import useUser from 'hooks/useUser.js';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Authorize = ({ children }) => {
	const { role } = useUser();

	return Boolean(role) && role !== MEMBER && children;
};

export default Authorize;
