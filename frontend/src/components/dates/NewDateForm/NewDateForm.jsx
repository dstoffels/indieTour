import DatePickerModal from 'components/forms/tour/DatePickerModal/DatePickerModal.jsx';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import LocationField from 'components/generic/LocationField/LocationField.jsx';
import useDates from 'hooks/useDates.js';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const NewDateForm = ({ tourdates, setTourDates }) => {
	const getNextDate = () => {
		const lastDate = tourdates[tourdates.length - 1];
		return lastDate
			? moment(lastDate.date).add(1, 'day').format('YYYY-MM-DD')
			: moment().format('YYYY-MM-DD');
	};

	const [date, setDate] = useState(getNextDate());
	const [place, setPlace] = useState(null);

	const { activeDate, addTourDate, fetchTourDates } = useDates(setTourDates);
	const handleDate = (date) => setDate(date);

	const clearForm = () => {
		setPlace(null);
		setDate(getNextDate());
	};

	const handleSubmit = () => {
		addTourDate(date, place);
	};

	useEffect(() => {
		clearForm();
	}, [tourdates]);

	useEffect(() => {
		fetchTourDates();
	}, [activeDate]);

	return (
		<ButtonForm
			btnText='Add Date'
			onSubmit={handleSubmit}
			autoClose={false}
			onClose={() => setPlace(null)}
		>
			<DatePickerModal value={date} onChange={handleDate} tourDates={tourdates} />
			<LocationField required value={place} onSelect={setPlace} />
		</ButtonForm>
	);
};

export default NewDateForm;
