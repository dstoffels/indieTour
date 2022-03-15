import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';

const TourPanel = props => {
	return (
		<Panel title='TOURS'>
			<Panel.Section>
				<ul>
					<li>tour selector</li>
					<li>add tour btn</li>
					<li>new tour modal</li>
					<li>editable tour info</li>
					<li>tour desc</li>
					<li>notes</li>
					<li>archive btn</li>
					<li>show archived tours toggle?</li>
				</ul>
			</Panel.Section>
		</Panel>
	);
};

export default TourPanel;
