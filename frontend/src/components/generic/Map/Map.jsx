import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';
import useAPI from 'hooks/useAPI.js';

const Map = ({ place_id }) => {
	const [data, setData] = useState(null);

	const api = useAPI();

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	});

	useEffect(() => {
		place_id && api.gapi.maps.place.details.get(place_id, (data) => setData(data.result));
	}, [place_id]);

	return (
		isLoaded &&
		data && (
			<div className='map-container'>
				<GoogleMap zoom={12} center={data.geometry.location} mapContainerClassName='map-container'>
					<Marker label={data.name} position={data.geometry.location} />
				</GoogleMap>
			</div>
		)
	);
};

export default Map;
