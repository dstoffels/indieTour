import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	Stack,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';

import './AuthForm.css';

const AuthForm = ({ title, fields = [], onSubmit, submitBtn, secondaryBtn, onSecondary, id }) => {
	const initialState = { error: '' };
	fields.forEach(field => (initialState[field.toLowerCase()] = ''));

	const [form, setForm] = useState(initialState);

	console.log(form);
	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(form, setForm);
	};

	const textFields = fields.map(field => (
		<TextField
			value={form[field.toLowerCase()]}
			onChange={e => setForm({ ...form, [field.toLowerCase()]: e.target.value })}
			key={field}
			required
			fullWidth
			label={field}
			type={parseFieldType(field)}
		/>
	));

	const priBtn = submitBtn ? (
		<Button form={id} type='submit' size='large' variant='contained'>
			{submitBtn}
		</Button>
	) : null;

	const secBtn = secondaryBtn ? (
		<Button onClick={onSecondary} size='small'>
			{secondaryBtn}
		</Button>
	) : null;

	return (
		<Card className='auth-form'>
			<CardHeader title={title} />
			<Divider />
			<CardContent>
				<form id={id} onSubmit={handleSubmit}>
					<Stack spacing={2}>{textFields}</Stack>
					<i className='text-danger'>{form.error}</i>
				</form>
			</CardContent>
			<Divider />
			<CardActions className='justify-content-between'>
				{secBtn} {priBtn}
			</CardActions>
		</Card>
	);
};

export default AuthForm;

function parseFieldType(field) {
	const types = ['email', 'password'];
	return types.includes(field.toLowerCase()) ? field.toLowerCase() : 'text';
}
