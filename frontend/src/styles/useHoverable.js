import { makeStyles } from '@mui/styles';

const useHoverable = makeStyles((theme) => ({
	hoverable: {
		'&:hover': {
			backgroundColor: 'rgba(255,255,255,0.08)',
			cursor: 'pointer',
		},
	},
}));

export default useHoverable;
