import { ExpandMore } from '@mui/icons-material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Stack,
	Button,
} from '@mui/material';
import React from 'react';

const MemberAccordion = ({ member, expanded, onChange }) => {
	return (
		<Accordion
			className='bg-med-grey mobile-max-w m-auto'
			expanded={expanded === member?.displayName}
			onChange={onChange(member?.displayName)}>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Typography variant='caption'>{member?.email}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Stack textAlign='left'>
					<Typography variant='caption'>Role: {member?.role}</Typography>
					<Typography variant='caption'>Username: {member?.displayName}</Typography>
					<Stack direction='row-reverse'>
						<Button size='small' color='error'>
							REMOVE
						</Button>
						<Button size='small' color='warning'>
							CHANGE ROLE
						</Button>
					</Stack>
				</Stack>
			</AccordionDetails>
		</Accordion>
	);
};

export default MemberAccordion;
