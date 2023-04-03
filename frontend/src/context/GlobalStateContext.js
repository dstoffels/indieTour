import useAuth from 'hooks/useAuth.js';
import React, { useContext, useState } from 'react';

const GlobalStateContext = React.createContext();

export const GlobalStateProvider = ({ children }) => {
	const [activeBand, setActiveBand] = useState(null);
	const [activeTour, setActiveTour] = useState(null);
	const { user } = useAuth();

	const isOwner = user?.id === activeBand?.owner?.id;
	const isAdmin =
		isOwner || activeBand?.users?.find((bandUser) => bandUser.id === user?.id)?.is_admin;

	const contextData = {
		activeBand,
		setActiveBand,
		activeTour,
		setActiveTour,
		isOwner,
		isAdmin,
	};

	return <GlobalStateContext.Provider value={contextData}>{children}</GlobalStateContext.Provider>;
};

export const useGlobalState = () => {
	const globalState = useContext(GlobalStateContext);

	if (!globalState) {
		throw new Error('useGlobalState must be used within a StoreContext.Provider');
	}
	const { activeBand, setActiveBand, activeTour, setActiveTour, isOwner, isAdmin } = globalState;
	return { activeBand, setActiveBand, activeTour, setActiveTour, isOwner, isAdmin };
};
