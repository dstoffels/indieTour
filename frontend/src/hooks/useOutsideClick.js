import React, { useEffect, useState } from 'react';

const useOutsideClick = (ref, callback) => {
	function handleOutsideClick(event) {
		if (ref.current && !ref.current.contains(event.target)) callback(true);
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);

		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, [ref]);
};

export default useOutsideClick;
