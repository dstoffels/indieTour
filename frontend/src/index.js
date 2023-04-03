import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'theme/theme.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { GlobalStateProvider } from 'context/GlobalStateContext.js';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<GlobalStateProvider>
						<App />
					</GlobalStateProvider>
				</LocalizationProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
