import NewUserPanel from 'components/auth/NewUserPanel/NewUserPanel.jsx';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Page from '../Page/Page.jsx';

const NewUserPage = ({}) => {
	const [tempToken, setTempToken] = useState(null);
	const { uid } = useParams();
	const navigate = useNavigate();

	const fetchNewUserToken = async () => {
		try {
			// const response = await axios.get(endpoints.user(uid));
			// setTempToken(response.data);
		} catch (error) {
			console.error(error.response.data);
			navigate('/');
		}
	};

	useEffect(() => {
		fetchNewUserToken();
	}, []);

	return (
		<Page>
			<NewUserPanel token={tempToken} />
		</Page>
	);
};

export default NewUserPage;
