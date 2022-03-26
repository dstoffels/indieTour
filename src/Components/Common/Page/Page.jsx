import { Grid } from '@mui/material';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Page = ({ children }) => {
	return (
		<Container>
			<Grid container spacing={2} height='87.5vh' alignItems='stretch'>
				{children}
			</Grid>
		</Container>
	);
};

export default Page;
