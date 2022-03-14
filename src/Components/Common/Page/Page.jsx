import useNav from 'hooks/usePrevPage.js';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Page = ({ route, children }) => {
	useNav(route);
	return (
		<Container>
			<Row className='justify-content-center'>{children}</Row>
		</Container>
	);
};

export default Page;
