import useAPI from './useAPI.js';

const useContacts = () => {
	const api = useAPI();

	const fetchUserContacts = (callback) => {
		api.contact.get_all(callback);
	};

	const fetchContactMethodOptions = (callback) => {
		api.contact.method.options.get(callback);
	};

	return {
		fetchUserContacts,
		fetchContactMethodOptions,
	};
};

export default useContacts;
