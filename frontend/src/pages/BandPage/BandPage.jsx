import React from 'react';
import ListPanel from 'components/generic/ListPanel/ListPanel.jsx';
import Page from 'pages/Page/Page.jsx';
import useForm from 'hooks/useForm.js';
import TourListItem from '../../components/band/TourListItem/TourListItem.jsx';
import UserListItem from '../../components/band/UserListItem/UserListItem.jsx';
import BandSelect from 'components/band/BandSelect/BandSelect.jsx';
import { AddCircle, Close } from '@mui/icons-material';
import {
	FormControl,
	FormControlLabel,
	IconButton,
	Stack,
	Switch,
	Typography,
} from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import WithActiveTour from 'utils/WithActiveTour/WithActiveTour.jsx';
import TourMenu from 'components/band/TourMenu/TourMenu.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import { getConfigObj } from 'redux/userSlice.js';
import useAuth from 'hooks/useAuth.js';
import ListPanelItem from 'components/generic/ListPanelItem/ListPanelItem.jsx';
import AddUserForm from 'components/forms/users/AddUserForm/AddUserForm.jsx';

const BandPage = ({}) => {
	const { activeBand, userBands, handleBandPatch, isAdmin, setActiveband, fetchActiveBand } =
		useBand();

	const handleAddBand = () => {};

	const bandList = userBands?.map(userBand => (
		<ListPanelItem
			key={`band-${userBand.id}`}
			onClick={() => setActiveband(userBand.id)}
			active={userBand.id === activeBand?.id}>
			{userBand.name}
		</ListPanelItem>
	));

	const handleAdmin = async (banduserId, is_admin) => {
		const config = getConfigObj();
		await axios.patch(endpoints.bandusers(activeBand.id, banduserId), { is_admin }, config);
		fetchActiveBand();
	};

	const handleDeleteUser = async banduserId => {
		const config = getConfigObj();
		await axios.delete(endpoints.bandusers(activeBand.id, banduserId), config);
		fetchActiveBand();
	};

	const userList = activeBand?.users.map(user => (
		<ListPanelItem key={`user-${user.id}`}>
			<Stack direction='row' justifyContent='space-between'>
				<div className='flex-grow'>
					<div>{user.email}</div>
					<div>{user.username}</div>
				</div>
				{isAdmin && (
					<FormControlLabel
						label='Admin'
						control={
							<Switch
								checked={user.is_admin}
								onClick={e => handleAdmin(user.banduser_id, e.target.checked)}
							/>
						}
					/>
				)}
				<IconButton onClick={e => handleDeleteUser(user.banduser_id)} color='error'>
					<Close />
				</IconButton>
			</Stack>
		</ListPanelItem>
	));

	return (
		<Page>
			<Page.SplitBody>
				<ListPanel
					size={3}
					title={<Typography variant='h5'>Bands</Typography>}
					list={bandList}
					actionBtn={
						<IconButton variant='text' color='primary' onClick={handleAddBand}>
							<AddCircle fontSize='large' />
						</IconButton>
					}
				/>
				<Panel
					size={9}
					title={
						<EditField
							variant='h5'
							label='Band Name'
							initValue={activeBand?.name}
							name='name'
							onSubmit={handleBandPatch}
							canEdit={isAdmin}
						/>
					}>
					<Panel size={4} elevation={-1} title={<Typography variant='h6'>Members</Typography>}>
						{userList}
						<AddUserForm />
					</Panel>
				</Panel>
			</Page.SplitBody>
		</Page>
	);
};

export default BandPage;
