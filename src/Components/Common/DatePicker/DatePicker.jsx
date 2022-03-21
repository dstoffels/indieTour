import { DesktopDatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import withLocalization from 'utils/withLocalization.js';

const DatePicker = ({ value, onChange, pickerProps, label }) => {
	return (
		<DesktopDatePicker
			{...pickerProps}
			value={value}
			onChange={onChange}
			renderInput={params => (
				<TextField {...params} label={label} value={value} onChange={onChange} color='primary' />
			)}
		/>
	);
};

export default withLocalization(DatePicker);
