import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Page = ({ children }) => {
	return (
		<Container>
			<Row className='justify-content-center'>{children}</Row>
		</Container>
	);
};

export default Page;
