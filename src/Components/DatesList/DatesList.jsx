import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadDates } from './redux.js';

const DatesList = props => {
	useEffect(() => {
		props.loadDates();
	}, []);

	return (
		<div>
			{props.dates.map(date => (
				<div key={date.id}>{date.title}</div>
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return { dates: state.dates };
};

export default connect(mapStateToProps, { loadDates })(DatesList);
