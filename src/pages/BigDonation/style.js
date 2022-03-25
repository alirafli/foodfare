import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  boldText: {
    display: 'inline',
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
  },
  step: {
    height: "200px",
  },
}));
