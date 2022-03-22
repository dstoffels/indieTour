import Panel from 'Components/Common/Panel/Panel.jsx';
import useWindow from 'hooks/useWindow.js';
import React from 'react';

const DateDetailsPanel = ({ tourDate }) => {
	const { screenX } = useWindow();
	return <Panel title='Date Details'>{/* <Panel.Section ></Panel.Section> */}</Panel>;
};

export default DateDetailsPanel;
