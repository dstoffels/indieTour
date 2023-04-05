import useAuth from 'hooks/useAuth.js';
import React, { useContext, useState } from 'react';

const GlobalStateContext = React.createContext();

export const GlobalStateProvider = ({ children }) => {
	const [activeBand, setActiveBand] = useState(null);
	const [activeTour, setActiveTour] = useState(null);
	const [activeDate, setActiveDate] = useState(null);
	const [activeProspect, setActiveProspect] = useState(null);
	const { user } = useAuth();

	const isOwner = user?.id === activeBand?.owner?.id;
	const isAdmin =
		isOwner || activeBand?.users?.find((bandUser) => bandUser.id === user?.id)?.is_admin;

	const contextData = {
		activeBand,
		setActiveBand,
		isOwner,
		isAdmin,
		activeTour,
		setActiveTour,
		activeDate,
		setActiveDate,
		activeProspect,
		setActiveProspect,
	};

	return <GlobalStateContext.Provider value={contextData}>{children}</GlobalStateContext.Provider>;
};

export const useGlobalState = () => {
	const globalState = useContext(GlobalStateContext);

	if (!globalState) {
		throw new Error('useGlobalState must be used within a StoreContext.Provider');
	}
	const {
		activeBand,
		setActiveBand,
		isOwner,
		isAdmin,
		activeTour,
		setActiveTour,
		activeDate,
		setActiveDate,
		activeProspect,
		setActiveProspect,
	} = globalState;
	return {
		activeBand,
		setActiveBand,
		isOwner,
		isAdmin,
		activeTour,
		setActiveTour,
		activeDate,
		setActiveDate,
		activeProspect,
		setActiveProspect,
	};
};
