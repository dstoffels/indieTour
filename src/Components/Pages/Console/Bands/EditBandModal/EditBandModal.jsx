import { Button, Dialog, Stack } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import BandForm from '../BandForm/BandForm.jsx';
import DeleteBandModal from '../DeleteBandModal/DeleteBandModal.jsx';
import DeleteBandModalBtn from '../DeleteBandModal/DeleteBandModalBtn.jsx';
import useBands from '../useBands.js';
import EditBandBtn from './EditBandBtn.jsx';

export const EDIT_BAND_FORM_ID = 'edit-band-form';

const EditBandModal = props => {
	const { activeMember, members, updateBand } = useBands();
	const { closeMainModal } = useModal();

	const editableMembers = members.filter(member => member.role !== 'owner');

	const values = { name: activeMember?.bandName, members: editableMembers };

	const handleSubmit = form => updateBand(form);

	return (
		<>
			<BandForm
				title={`Editing ${activeMember?.bandName}`}
				id={EDIT_BAND_FORM_ID}
				onSubmit={handleSubmit}
				values={values}
				submitBtn={
					<Stack spacing={2}>
						<EditBandBtn />
						<Stack direction='row' spacing={2}>
							<DeleteBandModalBtn />
							<Button
								onClick={closeMainModal}
								fullWidth
								size='small'
								color='warning'
								variant='contained'>
								CANCEL
							</Button>
						</Stack>
					</Stack>
				}
			/>
		</>
	);
};

export default EditBandModal;
