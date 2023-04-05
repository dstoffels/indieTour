import DeletePopover from 'components/generic/danger-zone/DeletePopover/DeletePopover.jsx';
import useTour from 'hooks/useTour.js';
import React from 'react';

const DeleteTourPopover = ({ activeTour, deleteTour }) => {
	return (
		<DeletePopover btnText='Delete Tour' confirmationTxt={activeTour.name} onDelete={deleteTour}>
			Permanently deleting a tour cannot be undone.
		</DeletePopover>
	);
};

export default DeleteTourPopover;
