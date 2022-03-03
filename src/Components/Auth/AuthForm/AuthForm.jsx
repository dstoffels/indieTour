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

const AuthForm = ({ title, formId, onSubmit, children, priBtn, secBtn }) => {
	return (
		<Card className='auth-form'>
			<CardHeader title={title} />
			<Divider />
			<CardContent>
				<form id={formId} onSubmit={onSubmit}>
					<Stack spacing={2}>{children}</Stack>
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
