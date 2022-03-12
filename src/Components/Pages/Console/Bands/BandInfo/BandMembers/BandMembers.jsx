import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import MemberAccordion from '../BandMember/MemberAccordion.jsx';

// TODO: move: add members btn to component
// TODO: bld: add members form, must be reusable to display

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
				<Button size='large' color='success' variant='contained' className='mobile-max-w mx-auto'>
					ADD MEMBERS
				</Button>
			</Stack>
		</div>
	);
};

export default BandMembers;
