import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from 'theme/theme.js';
import { Provider } from 'react-redux';
import { store } from 'store.js';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<Provider store={store}>
						<App />
					</Provider>
				</ThemeProvider>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
