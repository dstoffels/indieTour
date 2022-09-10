import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

const Map = ({}) => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyBdC1gTPrIGaiHomx1-Yq4ybO83TJVV3eY',
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
