import NewUserPanel from 'components/auth/NewUserPanel/NewUserPanel.jsx';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Page from '../Page/Page.jsx';
import useAuth from 'hooks/useAuth.js';

const NewUserPage = ({}) => {
	const [tempToken, setTempToken] = useState(null);
	const { uid } = useParams();
	const navigate = useNavigate();
	const { fetchNewUserToken } = useAuth();

	const fetchToken = async () => {
		try {
			await fetchNewUserToken(uid, setTempToken);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchToken();
	}, []);

	return (
		<Page>
			<NewUserPanel token={tempToken} />
		</Page>
	);
};

export default NewUserPage;
