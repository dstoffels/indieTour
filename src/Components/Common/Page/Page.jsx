import { Grid, Slide } from '@mui/material';
import React from 'react';

const Page = ({ children, centered }) => {
	return (
		<Grid
			container
			item
			direction='row'
			justifyContent='center'
			alignItems='stretch'
			overflow='hidden'>
			<Slide direction='left' in={true} appear>
				<Grid
					container
					item
					xl={8}
					lg={9}
					md={11}
					sm={11}
					xs={12}
					columnSpacing={5}
					maxHeight='87vh'
					height='87vh'
					overflow='auto'
					alignItems='stretch'
					justifyContent={centered ? 'center' : ''}>
					{children}
				</Grid>
			</Slide>
		</Grid>
	);
};

export default Page;
