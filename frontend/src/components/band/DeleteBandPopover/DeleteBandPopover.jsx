import DeletePopover from 'components/generic/DeletePopover/DeletePopover.jsx';
import useBand from 'hooks/useBand.js';
import React from 'react';

const DeleteBandPopover = ({}) => {
	const { activeBand, deleteActiveBand } = useBand();

	return (
		<DeletePopover
			btnText='DELETE BAND'
			confirmationTxt={activeBand.name}
			onDelete={deleteActiveBand}
		>
			WARNING: Permanently deleting a band cannot be undone.
		</DeletePopover>
	);
};

export default DeleteBandPopover;
