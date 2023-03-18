import React from 'react';
import Page from 'pages/Page/Page.jsx';
import { Grid } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import EditField from 'components/generic/EditField/EditField.jsx';
import UserPanel from 'components/band/UserPanel/UserPanel.jsx';
import BandListItem from 'components/band/BandListItem/BandListItem.jsx';
import BandOwnerPanel from 'components/band/BandOwnerPanel/BandOwnerPanel.jsx';
import BandToursPanel from 'components/band/BandToursPanel/BandToursPanel.jsx';
import NewBandForm from 'components/forms/band/NewBandForm/NewBandForm.jsx';

const BandPage = ({}) => {
	const {
		activeBand,
		userBands,
		handleBandPatch,
		isAdmin,
		isOwner,
		setActiveband,
		fetchActiveBand,
	} = useBand();

	const handleAddBand = () => {};

	const bandList = userBands?.map(band => (
		<BandListItem
			key={`band-${band.id}`}
			band={band}
			activeBand={activeBand}
			setActiveband={setActiveband}
		/>
	));

	return (
		<Page>
			<Page.SplitBody>
				<Panel size={3} title='Bands'>
					<NewBandForm />
					{bandList}
				</Panel>
				<Panel
					padding={1}
					size={9}
					titleEl={
						<EditField
							variant='h5'
							label='Band Name'
							initValue={activeBand?.name}
							name='name'
							onSubmit={handleBandPatch}
							canEdit={isAdmin}
						/>
					}>
					<Grid container spacing={1}>
						<BandToursPanel />
						<UserPanel />
						<BandOwnerPanel />
					</Grid>
				</Panel>
			</Page.SplitBody>
		</Page>
	);
};

export default BandPage;
