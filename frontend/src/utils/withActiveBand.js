import useBand from 'hooks/useBand.js';
import React from 'react';

const withActiveBand = Component => props => {
	const { activeBand, setActiveband, fetchActiveBand, isOwner, isAdmin } = useBand();
	return activeBand ? (
		<Component
			{...props}
			activeBand={activeBand}
			setActiveband={setActiveband}
			fetchActiveBand={fetchActiveBand}
			isOwner={isOwner}
			isAdmin={isAdmin}
		/>
	) : (
		<div></div>
	);
};

export default withActiveBand;
