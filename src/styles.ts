import { makeStyles } from '@material-ui/core/styles';

export const Styles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },

  main: {
    padding: "50px 0"
  },

  card: {
    padding: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center"
  },

  textField: {
    width: "100%",
  },

  btn: {
    marginTop: "25px",
    width: "100%",
    padding: "15px"
  }
}));