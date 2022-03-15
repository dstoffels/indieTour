import { Dialog } from '@mui/material';
import React from 'react';
import BandForm from '../BandForm/BandForm.jsx';
import useBands from '../useBands.js';
import EditBandBtn from './EditBandBtn.jsx';

export const EDIT_BAND_FORM_ID = 'edit-band-form';

const EditBandModal = props => {
	const { activeMember, members, editBandModal, closeEditBandModal, updateBand } = useBands();

	const editableMembers = members.filter(member => member.role !== 'owner');

	const values = { name: activeMember?.bandName, members: editableMembers };

	const handleSubmit = form => updateBand(form);

	return (
		<Dialog fullWidth open={editBandModal} onClose={closeEditBandModal}>
			<div>
				<BandForm
					title={`Editing ${activeMember?.bandName}`}
					id={EDIT_BAND_FORM_ID}
					onSubmit={handleSubmit}
					submitBtn={<EditBandBtn />}
					values={values}
				/>
			</div>
		</Dialog>
	);
};

export default EditBandModal;
