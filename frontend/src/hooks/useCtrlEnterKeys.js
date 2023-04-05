import { useEffect } from 'react';

const useCtrlEnterKeys = (callback) => {
	let keys = {};

	function keyDown(e) {
		keys[e.key] = true;
		if (keys['Control'] && e.key === 'Enter') callback();
	}

	function keyUp(e) {
		delete keys[e.key];
	}

	useEffect(() => {
		document.addEventListener('keydown', keyDown);
		document.addEventListener('keyup', keyUp);
		return () => {
			document.removeEventListener('keydown', keyDown);
			document.removeEventListener('keyup', keyUp);
		};
	}, []);
};

export default useCtrlEnterKeys;
