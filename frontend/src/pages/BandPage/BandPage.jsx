import React from 'react';
import ListPanel from 'components/generic/ListPanel/ListPanel.jsx';
import Page from 'pages/Page/Page.jsx';
import { AddCircle, Close } from '@mui/icons-material';
import {
	FormControl,
	FormControlLabel,
	Grid,
	IconButton,
	Stack,
	Switch,
	Typography,
} from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import EditField from 'components/generic/EditField/EditField.jsx';
import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import { getConfigObj } from 'redux/userSlice.js';
import ListPanelItem from 'components/generic/ListPanelItem/ListPanelItem.jsx';
import AddUserForm from 'components/forms/users/AddUserForm/AddUserForm.jsx';
import UserPanel from 'components/band/UserPanel/UserPanel.jsx';
import BandListItem from 'components/band/BandListItem/BandListItem.jsx';
import BandOwnerPanel from 'components/band/BandOwnerPanel/BandOwnerPanel.jsx';
import BandToursPanel from 'components/band/BandToursPanel/BandToursPanel.jsx';

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
				<ListPanel
					size={3}
					title='Bands'
					actionBtn={
						<IconButton variant='text' color='primary' onClick={handleAddBand}>
							<AddCircle fontSize='large' />
						</IconButton>
					}>
					{bandList}
				</ListPanel>
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
						<Grid item height='100%' xs={12} md={4}>
							<BandOwnerPanel />
							<UserPanel />
						</Grid>
					</Grid>
				</Panel>
			</Page.SplitBody>
		</Page>
	);
};

export default BandPage;
