import { createTheme } from '@mui/material';

export const colors = {
	text: 'rgb(225,225,225)',
	iconBtn: 'rgb(177, 209, 236)',
	grey: 'rgb(62, 62, 62)',
	greyLight: 'rgb(85, 85, 85)',
	greyDark: 'rgb(44, 44, 44)',
};

const theme = createTheme({
	typography: {},
	palette: {
		background: {
			default: colors.greyLight,
			paper: colors.grey,
		},
		action: {
			hover: 'rgba(255, 255, 255, 0.05)',
		},
		icon: {
			main: colors.iconBtn,
			hover: colors.grey,
		},
		text: {
			primary: colors.text,
			secondary: colors.text,
		},
		secondary: {
			main: colors.grey,
		},
	},
});

// declare module '@mui/material/styles' {
// 	interface theme {}

// 	interface Palette {
// 		icon: {
// 			main: string;
// 			hover: string;
// 		};
// 	}

// 	interface PaletteOptions {
// 		icon: {
// 			main: string;
// 			hover: string;
// 		};
// 	}
// }

export default theme;
