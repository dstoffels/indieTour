import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useEffect, useState } from 'react';
import AddProspectForm from '../AddProspectForm/AddProspectForm.jsx';
import useDates from 'hooks/useDates.js';
import ProspectListItem from '../ProspectListItem/ProspectListItem.jsx';
import useProspect from 'hooks/useProspect.js';

const ProspectsListPanel = ({}) => {
	const [prospects, setProspects] = useState([]);

	const { activeProspect } = useProspect();

	const { activeDate, fetchDateProspects } = useDates(setProspects);

	useEffect(() => {
		fetchDateProspects();
	}, [activeDate, activeProspect]);

	const prospectsList = prospects.map((prospect) => (
		<ProspectListItem key={prospect.id} prospect={prospect} onChange={fetchDateProspects} />
	));

	return (
		<Panel title='Prospects' size={6} elevation={-1}>
			<AddProspectForm onSubmit={fetchDateProspects} />
			{prospectsList}
		</Panel>
	);
};

export default ProspectsListPanel;
