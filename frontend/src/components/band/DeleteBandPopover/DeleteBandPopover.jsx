import DeletePopover from 'components/generic/DeletePopover/DeletePopover.jsx';
import useBand from 'hooks/useBand.js';
import React, { useState } from 'react';

const DeleteBandPopover = ({}) => {
	const { activeBand, deleteActiveBand } = useBand();

	const handleDelete = () => deleteActiveBand();

	return (
		<DeletePopover btnText='DELETE BAND' confirmationTxt={activeBand.name} onDelete={handleDelete}>
			WARNING: Permanently deleting a band cannot be undone.
		</DeletePopover>
	);
};

export default DeleteBandPopover;
