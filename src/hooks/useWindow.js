const useWindow = () => {
	const { innerWidth, innerHeight } = window;
	return { screenX: innerWidth, screenY: innerHeight };
};

export default useWindow;
