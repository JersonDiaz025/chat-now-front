import { createTheme } from '@mui/material';
//import { pxToRem } from '@/helpers';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#4BA2AC'
    },
    secondary: {
      main: '#AEC134'
    },
    background: 'rgb(245 247 254 / 0.98)'
  },
  typography: {
    fontFamily: 'font-family: "Droid Sans","Open Sans", "Helvetica", Arial',
    h1: {
      fonStyle: 'normal',
      fontFamily: 'font-family: "Droid Sans","Open Sans", "Helvetica", Arial',
      //fontSize: pxToRem(64),
      fontWeight: 400,
      lineHeight: '75px'
    },
    h2: {
      fonStyle: 'normal',
      fontFamily: 'Alte DIN 1451 Mittelschrift',
      //fontSize: pxToRem(48),
      fontWeight: 400,
      lineHeight: '56px'
    },
    h3: {
      fonStyle: 'normal',
      fontFamily: 'Alte DIN 1451 Mittelschrift',
      //fontSize: pxToRem(36),
      fontWeight: 400,
      lineHeight: '42px'
    },
    h4: {
      fonStyle: 'normal',
      fontFamily: 'Alte DIN 1451 Mittelschrift',
      //fontSize: pxToRem(24),
      fontWeight: 400,
      lineHeight: '28px'
    },
    h5: {
      fonStyle: 'normal',
      fontFamily: 'fontFamily: "Droid Sans,Open Sans, Helvetica, Arial"',
      //fontSize: pxToRem(20),
      fontWeight: 600,
      //lineHeight: '24px'
    },
    h6: {
      fonStyle: 'normal',
      fontFamily: 'Alte DIN 1451 Mittelschrift',
      //fontSize: pxToRem(16),
      fontWeight: 400,
      lineHeight: '19px'
    },
    body1: {
      fonStyle: 'normal',
      fontFamily: 'CynthoNext, sans-serif, system-ui',
      //fontSize: pxToRem(16),
      fontWeight: 400,
      lineHeight: '19px'
    },
    body2: {
      fonStyle: 'normal',
      fontFamily: 'CynthoNext, sans-serif, system-ui',
      //fontSize: pxToRem(14),
      fontWeight: 400,
      lineHeight: '16px'
    },
    button: {
      fonStyle: 'normal',
      fontFamily: 'CynthoNext, sans-serif, system-ui',
      //fontSize: pxToRem(14),
      fontWeight: 400,
      lineHeight: '16px'
    },
    subtitle1: {
      fonStyle: 'normal',
      fontFamily: 'CynthoNext, sans-serif, system-ui',
      //fontSize: pxToRem(16),
      fontWeight: 400,
      lineHeight: '19px'
    },
    subtitle2: {
      fonStyle: 'normal',
      fontFamily: 'CynthoNext, sans-serif, system-ui',
      //fontSize: pxToRem(14),
      fontWeight: 400,
      lineHeight: '16px'
    },
    caption: {
      fonStyle: 'normal',
      fontFamily: 'CynthoNext, sans-serif, system-ui',
      //fontSize: pxToRem(12),
      fontWeight: 400,
      lineHeight: '14px'
    },
    overline: {
      fonStyle: 'normal',
      fontFamily: 'CynthoNext, sans-serif, system-ui',
      //fontSize: pxToRem(10),
      fontWeight: 400,
      lineHeight: '12px'
    }
  }
});

export default defaultTheme;
