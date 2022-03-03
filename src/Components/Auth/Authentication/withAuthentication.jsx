import React from 'react';

import Authenticate from './Authentication.jsx';

const withAuthentication = Component => props => {
	return (
		<Authenticate>
			<Component {...props} />
		</Authenticate>
	);
};

export default withAuthentication;
