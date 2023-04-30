import useAPI from './useAPI.js';

const useContacts = () => {
	const api = useAPI();

	const fetchUserContacts = (callback) => {
		api.contact.get_all(callback);
	};

	const fetchContactMethodOptions = (callback) => {
		api.contact.method.options.get(callback);
	};

	const addContactMethod = (contact_id, methodData, callback) => {
		api.contact.detail.methods.post(contact_id, methodData, callback);
	};

	const updateContact = (contact_id, data, callback) => {
		api.contact.detail.patch(contact_id, data, callback);
	};

	const deleteContact = (contact_id, callback) => {
		api.contact.detail.delete(contact_id, callback);
	};

	const updateDateContact = (datecontact_id, data, callback) => {
		api.date_contact.detail.patch(datecontact_id, data, callback);
	};

	const deleteDateContact = (datecontact_id, callback) => {
		api.date_contact.detail.delete(datecontact_id, callback);
	};

	const updateContactMethod = (method_id, data, callback) => {
		api.contact.method.detail.patch(method_id, data, callback);
	};

	const deleteContactMethod = (method_id, callback) => {
		api.contact.method.detail.delete(method_id, callback);
	};

	return {
		fetchUserContacts,
		fetchContactMethodOptions,
		addContactMethod,
		updateContactMethod,
		deleteContactMethod,
		updateContact,
		deleteContact,
		updateDateContact,
		deleteDateContact,
	};
};

export default useContacts;
