import { Divider } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import NewTourModalBtn from '../../NewTourModal/NewTourModalBtn.jsx';
import useTours from '../../useTours.js';
import TourCard from './TourCard.jsx';

const Tours = ({ tours }) => {
	const { activeTour } = useTours();

	if (tours.length) {
		var tourCards = tours.map((tour, i, array) => {
			return (
				tour?.name !== activeTour?.name && (
					<div key={tour.name}>
						<TourCard tour={tour} />
						{i < array.length - 2 && <Divider />}
					</div>
				)
			);
		});

		return (
			<Panel.Section title='Tours' topActions={<NewTourModalBtn />}>
				{tourCards}
			</Panel.Section>
		);
	}
	return null;
};

export default Tours;
