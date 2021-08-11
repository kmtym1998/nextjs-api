import { createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[50], // #eceff1
    },
    secondary: {
      main: red[500], // #f44336
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 70,
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiTextField: {
      variant: 'outlined',
    },
    MuiCheckbox: {
      color: 'primary',
    },
    MuiRadio: {
      color: 'primary',
    },
    MuiSwitch: {
      color: 'primary',
    },
  },
});
export default theme;
