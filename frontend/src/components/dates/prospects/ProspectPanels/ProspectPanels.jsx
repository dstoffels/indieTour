import React, { useEffect, useState } from 'react';
import ProspectsListPanel from '../ProspectsListPanel/ProspectsListPanel.jsx';
import ProspectPanel from '../ProspectPanel/ProspectPanel.jsx';
import useProspect from 'hooks/useProspect.js';
import useDates from 'hooks/useDates.js';

const ProspectPanels = ({}) => {
	const { activeDate } = useDates();
	const { activeProspect, setActiveProspect } = useProspect();

	useEffect(() => {
		setActiveProspect(null);
	}, [activeDate]);

	return (
		<>
			<ProspectsListPanel />
			{activeProspect && <ProspectPanel />}
		</>
	);
};

export default ProspectPanels;
