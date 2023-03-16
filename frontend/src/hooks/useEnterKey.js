import { useEffect } from 'react';

const useEnterKey = callback => {
	function keyDown(e) {
		if (e.key === 'Enter') callback();
	}

	useEffect(() => {
		document.addEventListener('keydown', keyDown);
		return () => document.removeEventListener('keydown', keyDown);
	}, []);
};

export default useEnterKey;
