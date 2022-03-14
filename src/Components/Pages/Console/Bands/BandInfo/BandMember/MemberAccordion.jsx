import { Edit, ExpandMore } from '@mui/icons-material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Stack,
	IconButton,
	Tooltip,
} from '@mui/material';
import React from 'react';

// TODO: bld: edit member form, include remove member btn, role select
// TODO: move: edit btn to component
// TODO: make email a clickable link to open email app?

const MemberAccordion = ({ member, expanded, onChange }) => {
	return (
		<Accordion
			className='bg-med-grey  m-auto'
			expanded={expanded === member?.displayName}
			onChange={onChange(member?.displayName)}>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Typography variant='body1'>{member?.displayName}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Stack direction='row' justifyContent='space-between'>
					<Stack textAlign='left'>
						<Typography variant='caption'>Email: {member?.email}</Typography>
						<Typography variant='caption'>Role: {member?.role}</Typography>
					</Stack>
					<Stack direction='row'>
						<Tooltip title={`Edit role for ${member?.displayName}`}>
							<IconButton size='small'>
								<Edit />
							</IconButton>
						</Tooltip>
					</Stack>
				</Stack>
			</AccordionDetails>
		</Accordion>
	);
};

export default MemberAccordion;
