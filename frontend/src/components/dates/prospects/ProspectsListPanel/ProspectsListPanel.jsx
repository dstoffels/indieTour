import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useEffect, useState } from 'react';
import AddProspectForm from '../AddProspectForm/AddProspectForm.jsx';
import useDates from 'hooks/useDates.js';
import ProspectListItem from '../ProspectListItem/ProspectListItem.jsx';
import useProspect from 'hooks/useProspect.js';
import { Divider } from '@mui/material';

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
			<Divider sx={{ m: '0 !important' }} />
			{prospectsList}
		</Panel>
	);
};

export default ProspectsListPanel;
