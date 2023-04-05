import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import LocationField from 'components/generic/LocationField/LocationField.jsx';
import useAPI from 'hooks/useAPI.js';
import useDates from 'hooks/useDates.js';
import React, { useEffect, useState } from 'react';

const AddProspectForm = ({ onSubmit }) => {
	const [place, setPlace] = useState({ place_id: '', description: '' });
	const [placeDetails, setPlaceDetails] = useState(null);

	const { addProspect } = useDates(onSubmit);

	const api = useAPI();

	useEffect(() => {
		place?.place_id &&
			api.gapi.maps.place.details.get(place.place_id, (data) => {
				setPlaceDetails(data.result);
			});
	}, [place]);

	return (
		<ButtonForm btnText='Add Prospect' onSubmit={addProspect} formData={placeDetails}>
			<LocationField value={place} onSelect={(place) => setPlace(place)} />
		</ButtonForm>
	);
};

export default AddProspectForm;
