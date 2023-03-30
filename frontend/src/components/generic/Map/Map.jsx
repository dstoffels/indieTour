import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';
const Map = ({ data = null }) => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	});

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
