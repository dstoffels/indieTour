import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';
const Map = ({}) => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	});

	return (
		isLoaded && (
			<div className='map-container'>
				<GoogleMap zoom={10} center={{ lat: 0, lng: 0 }} mapContainerClassName='map-container' />
			</div>
		)
	);
};

export default Map;
