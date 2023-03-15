import { AppBar, Grid, Paper, Toolbar, Typography } from '@mui/material';
import Navbar from 'components/nav/NavBar/NavBar.jsx';
import React from 'react';
import './Page.css';

const Page = ({ select, children }) => (
	<Paper className='page'>
		<Navbar select={select} />

		{children}
	</Paper>
);

export default Page;

// const PageHeader = ({ children }) => (
// 	<AppBar position='relative'>
// 		<Toolbar className='justify-between' variant='dense'>
// 			{children}
// 		</Toolbar>
// 	</AppBar>
// );

// Page.Header = PageHeader;

const PageSplitBody = ({ children }) => (
	<Grid height='100%' container spacing={1} padding={1} justifyContent='space-between'>
		{children}
	</Grid>
);

Page.SplitBody = PageSplitBody;
