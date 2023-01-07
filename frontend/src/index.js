import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'theme/theme.js';
import { Provider } from 'react-redux';
import { store } from 'redux/store.js';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
