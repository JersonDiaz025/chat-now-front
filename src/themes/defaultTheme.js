import { createTheme } from "@mui/material";
//import { pxToRem } from '@/helpers';

const defaultTheme = (darkMode) => {
  return createTheme({
    palette: {
      primary: {
        main: "#4BA2AC",
      },
      secondary: {
        main: "#AEC134", 
      },
    },

    mode: {
      colorHeader: darkMode ? "#0f0f0f": "#e5e8e8",
      background: darkMode ? "#0f0f0f" : "",
      colorIcon: darkMode ? 'rgba(246,247,249,.05)' : "rgba(35,39,47,.05)",
      textColor: !darkMode ? "#0f0f0f": "#e5e8e8",
      
    },
    typography: {
      fontFamily: 'Quicksand, sans-serif',
      color: !darkMode ? "#0f0f0f" : "#F5F7FE",
      h1: {
        fonStyle: "normal",
        fontFamily: 'Quicksand, sans-serif',
        //fontSize: pxToRem(64),
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        fontWeight: 400,
        lineHeight: "75px",
      },
      h2: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(48),
        fontWeight: 400,
        lineHeight: "56px",
      },
      h3: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(36),
        fontWeight: 400,
        lineHeight: "42px",
      },
      h4: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(24),
        fontWeight: 400,
        lineHeight: "28px",
      },
      h5: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(20),
        //color: !darkMode ? '#21212' : '#F5F7FE',
        fontWeight: 600,
        //lineHeight: '24px'
      },
      h6: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: "19px",
      },
      body1: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: "19px",
      },
      body2: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(14),
        fontWeight: 400,
        lineHeight: "16px",
      },
      button: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(14),
        fontWeight: 400,
        lineHeight: "16px",
      },
      subtitle1: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: "19px",
      },
      subtitle2: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(14),
        fontWeight: 400,
        lineHeight: "16px",
      },
      caption: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(12),
        fontWeight: 400,
        lineHeight: "14px",
      },
      overline: {
        fonStyle: "normal",
        fontFamily: "Quicksand, sans-serif",
        color: !darkMode ? "#0f0f0f" : "#F5F7FE",
        //fontSize: pxToRem(10),
        fontWeight: 400,
        lineHeight: "12px",
      },
    },
  });
};

export default defaultTheme;
