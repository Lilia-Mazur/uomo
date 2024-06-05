import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './button.config';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#222222',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#E4E4E4',
      contrastText: '#222222'
    },
    text: {
      primary: '#222222',
      secondary: '#222222'
    },
    grey: {
      100: '#FBFAFC',
      300: '#E6E6E6',
      500: '#ADA7B8'
    },
    action: {
      hover: '#444444',
      selected: '#111111'
    },
    error: {
      main: '#D6001C'
    },
    background: {
      paper: '#FBFAFC'
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: "'Jost', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  components: {
    MuiButton: MuiButtonConfig,
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default theme;
