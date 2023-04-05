import { useGlobalState } from 'context/GlobalStateContext.js';
import useDates from './useDates.js';
import useAPI from './useAPI.js';

const useProspect = () => {
	const { activeProspect, setActiveProspect } = useGlobalState();
	const { activeDate } = useDates();

	const api = useAPI();

	const fetchActiveDateProspects = (callback) => {
		api.date.detail.prospects.get_all(activeDate.id, callback);
	};

	const addNewProspect = (prospectData) => {
		api.date.detail.prospects.post(activeDate.id, prospectData, setActiveProspect);
	};

	const updateProspect = (prospect_id, prospectData, callback) => {
		api.prospect.detail.patch(prospect_id, prospectData, callback);
	};

	const updateActiveProspect = (prospectData) => {
		api.prospect.detail.patch(activeProspect.id, prospectData, setActiveProspect);
	};

	const deleteActiveProspect = () => {
		api.prospect.detail.delete(activeProspect.id, setActiveProspect);
	};

	const addLogEntry = (entryData) => {
		api.prospect.detail.log.post(activeProspect.id, entryData, setActiveProspect);
	};

	const updateLogEntry = (entry_id, entryData) => {
		api.prospect.log_entry.detail.patch(entry_id, entryData, setActiveProspect);
	};

	const deleteLogEntry = (entry_id) => {
		api.prospect.log_entry.detail.delete(entry_id, setActiveProspect);
	};

	const withActiveProspect = (jsx) => (activeProspect ? jsx : null);

	return {
		activeProspect,
		setActiveProspect,
		fetchActiveDateProspects,
		addNewProspect,
		updateProspect,
		updateActiveProspect,
		deleteActiveProspect,
		addLogEntry,
		updateLogEntry,
		deleteLogEntry,
		withActiveProspect,
	};
};

export default useProspect;
