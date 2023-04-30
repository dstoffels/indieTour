import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import LocationField from 'components/generic/LocationField/LocationField.jsx';
import useAPI from 'hooks/useAPI.js';
import useDates from 'hooks/useDates.js';
import React, { useEffect, useState } from 'react';

const AddProspectForm = ({ onSubmit }) => {
	const [place, setPlace] = useState(null);

	const { addProspect } = useDates(onSubmit);

	return (
		<ButtonForm btnText='Add Prospect' onSubmit={addProspect} formData={place}>
			<LocationField value={place} onSelect={(place) => setPlace(place)} />
		</ButtonForm>
	);
};

export default AddProspectForm;
