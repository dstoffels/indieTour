import { Grid } from '@mui/material';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Page = ({ children, centered }) => {
	return (
		<Container>
			<Grid
				container
				spacing={2}
				height='87.5vh'
				alignItems='stretch'
				justifyContent={centered ? 'center' : ''}>
				{children}
			</Grid>
		</Container>
	);
};

export default Page;
