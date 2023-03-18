import { Add, AddCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import TourSelect from 'components/nav/TourSelect/TourSelect.jsx';
import useTour from 'hooks/useTour.js';
import Page from 'pages/Page/Page.jsx';
import React, { useEffect } from 'react';

const DatesPage = ({}) => {
	const { fetchActiveTour, activeTour } = useTour();

	useEffect(() => {
		fetchActiveTour();
	}, []);

	return (
		<Page select={<TourSelect />}>
			<Page.SplitBody>
				<Panel
					size={3}
					title='Dates'
					actionBtn={
						<IconButton variant='text' color='primary'>
							<AddCircle fontSize='large' />
						</IconButton>
					}
				/>
				<Panel size={9} title='date goes here' />
			</Page.SplitBody>
		</Page>
	);
};

export default DatesPage;
