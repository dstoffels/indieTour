import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'theme/theme.js';
import { Provider } from 'react-redux';
import { store } from 'redux/store.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Provider store={store}>
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<App />
					</LocalizationProvider>
				</Provider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
