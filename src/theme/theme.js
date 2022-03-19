import { createTheme } from '@mui/material';
import palette from './palette.js';

const theme = createTheme({
	typography: {},
	palette: {
		background: {
			default: palette.bg.default,
			paper: palette.bg.paper,
		},

		primary: {
			main: palette.primary,
		},

		secondary: {
			main: palette.secondary,
		},

		error: {
			main: palette.error,
		},

		warning: {
			main: palette.warning,
		},

		success: {
			main: palette.success,
		},

		action: {
			hover: 'rgba(255, 255, 255, 0.05)',
			selected: 'rgba(255, 255, 255, 0.5)',
		},

		nav: {
			main: palette.nav.main,
		},

		text: {
			primary: palette.text.primary,
			secondary: palette.text.secondary,
		},
		mode: 'dark',
	},
});

export default theme;