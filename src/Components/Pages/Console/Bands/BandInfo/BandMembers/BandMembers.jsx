import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Stack,
	Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import React, { useState } from 'react';
import MemberAccordion from '../BandMember/MemberAccordion.jsx';

const BandMembers = props => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = panel => (e, isExpanded) => setExpanded(isExpanded ? panel : false);

	return (
		<div>
			<Stack marginY={2} spacing={2}>
				<h5>Band Members</h5>
				<div>
					<MemberAccordion
						member={{ email: 'dan.stoffels@gmail.com', role: 'admin', displayName: 'asdoh' }}
						expanded={expanded}
						onChange={handleChange}
					/>
					<MemberAccordion
						member={{ email: 'dan.stoffels@gmail.com', role: 'admin', displayName: 'asdsdf' }}
						expanded={expanded}
						onChange={handleChange}
					/>
					<MemberAccordion
						member={{
							email: 'dan.stoffels@gmail.com',
							role: 'admin',
							displayName: 'asddfasdasdoh',
						}}
						expanded={expanded}
						onChange={handleChange}
					/>
				</div>
				<Button size='large' variant='contained' className='mobile-max-w mx-auto'>
					ADD MEMBER
				</Button>
			</Stack>
		</div>
	);
};

export default BandMembers;
