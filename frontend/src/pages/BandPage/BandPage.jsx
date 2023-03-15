import React from 'react';
import ListPanel from 'components/generic/ListPanel/ListPanel.jsx';
import Page from 'pages/Page/Page.jsx';
import useForm from 'hooks/useForm.js';
import TourListItem from '../../components/band/TourListItem/TourListItem.jsx';
import UserListItem from '../../components/band/UserListItem/UserListItem.jsx';
import BandSelect from 'components/band/BandSelect/BandSelect.jsx';
import { AddCircle } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import WithActiveTour from 'utils/WithActiveTour/WithActiveTour.jsx';
import TourMenu from 'components/band/TourMenu/TourMenu.jsx';

const BandPage = ({}) => {
	const { activeBand } = useBand();
	const { activeTour } = useTour();
	const { formKeys, openForm } = useForm();

	let tours = activeBand?.tours?.length
		? activeBand?.tours?.map((tour, i) => <TourListItem key={`${i}-${tour.id}`} tour={tour} />)
		: 'No Tours Yet';

	const handleAddTour = () => {
		openForm(formKeys.newTour, {
			name: '',
			notes: '',
			users: [],
			dates: [],
		});
	};

	return (
		<Page select={<BandSelect />}>
			<Page.SplitBody>
				<ListPanel
					size={3}
					title='Tours'
					list={tours}
					actionBtn={
						<IconButton variant='text' color='primary' onClick={handleAddTour}>
							<AddCircle fontSize='large' />
						</IconButton>
					}
				/>
				<WithActiveTour>
					<Panel size={9} title={activeTour?.name} actionBtn={<TourMenu tour={activeTour} />}>
						<Typography variant='overline'>Notes</Typography>
						{activeTour?.notes}
					</Panel>
				</WithActiveTour>
			</Page.SplitBody>
		</Page>
	);
};

export default BandPage;
