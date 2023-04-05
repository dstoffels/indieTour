import DatePickerModal from 'components/forms/tour/DatePickerModal/DatePickerModal.jsx';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import LocationField from 'components/generic/LocationField/LocationField.jsx';
import useAPI from 'hooks/useAPI.js';
import useDates from 'hooks/useDates.js';
import useEscKey from 'hooks/useEscKey.js';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewDateForm = ({ tourdates, setTourDates }) => {
	const getNextDate = () => {
		const lastDate = tourdates[tourdates.length - 1];
		return lastDate
			? moment(lastDate.date).add(1, 'day').format('YYYY-MM-DD')
			: moment().format('YYYY-MM-DD');
	};

	const [date, setDate] = useState(getNextDate());
	const [place, setPlace] = useState(null);

	const navigate = useNavigate();
	const { activeDate, addTourDate, fetchTourDates } = useDates(setTourDates);
	const handleDate = (date) => setDate(date);

	const clearForm = () => {
		setPlace(null);
		setDate(getNextDate());
	};

	const handleSubmit = () => {
		const { terms } = place;
		const { main_text } = place.structured_formatting;
		const political_location = `${terms[terms.length - 3]?.value + ','} ${
			terms[terms.length - 2].value
		}, ${terms[terms.length - 1].value}`;
		addTourDate(date, place);
	};

	useEffect(() => {
		clearForm();
	}, [tourdates]);

	useEffect(() => {
		fetchTourDates();
		activeDate && navigate(`/dates/${activeDate.id}`);
	}, [activeDate]);

	return (
		<ButtonForm btnText='Add Date' onSubmit={handleSubmit} autoClose={false}>
			<DatePickerModal value={date} onChange={handleDate} tourDates={tourdates} />
			<LocationField value={place} onSelect={setPlace} />
		</ButtonForm>
	);
};

export default NewDateForm;
