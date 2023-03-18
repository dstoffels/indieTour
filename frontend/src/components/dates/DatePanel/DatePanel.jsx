import { Typography } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useDates from 'hooks/useDates.js';
import moment from 'moment';
import React from 'react';

const DatePanel = ({ activeTour, isAdmin }) => {
	const { activeDate, updateDate } = useDates();

	return activeDate ? (
		<Panel
			size={9}
			padding={1}
			titleEl={
				<div>
					<Typography>{moment(activeDate?.date).format('dddd DD MMMM YYYY')}</Typography>
					<EditField
						label='Title'
						initValue={activeDate?.title}
						name='title'
						variant='h5'
						onSubmit={updateDate}
						canEdit={isAdmin}
					/>
				</div>
			}></Panel>
	) : null;
};

export default DatePanel;
