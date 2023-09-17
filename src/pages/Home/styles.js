import { Box, Paper, styled } from "@mui/material";

export const StyledHome = styled(Box)(({ theme }) => ({
  height: "100%",

  //padding: 0,
  //marginTop: "6rem",
  //width: "100%",
  //height: "100%",
  display: "flex",
  backgroundColor: theme.mode.background,
  overflow: "hidden",
  //position: 'absolute',
  //position: 'relative',
  marginTop: "88px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "30px",
  paddingRight: "30px",
  width: "100%",
  gap: "5px",
  //padding: '0px',
  //paddingBottom: '126px',
  //backgroundColor: '#f4f7f6',
  justifyContent: "center",
  //maxHeight: "100%",
  //position: "relative",
  //minHeight: "100%",
  //alignItems: 'center',
  //display: "grid",
  //gridTemplateColumns: "20rem auto",
  //margin: theme.spacing(10, 0, 0, 0),
  //background: 'red'

  //[theme.breakpoints.down('sm')]: {
  //  //margin: 1,
  //  width: '100%',
  //  padding: 1,
  //  height: "100%",
  //}
  //border: '0.1px solid #ffff',

  "& ::-webkit-scrollbar": {
    display: "none",
    width: "6px",
  },
  "& hover::-webkit-scrollbar-track": {
    //background: '#f1f1f1', /* Color de fondo de la pista de desplazamiento */
    backgroundColor: theme.mode.background,
  },
  "& ::-webkit-scrollbar-thumb": {
    background: "#888" /* Color del pulgar de desplazamiento */,
    backgroundColor: theme.mode.background,
  },
  "& ::-webkit-scrollbar-thumb": {
    borderRadius: "50px",
    background:
      "#5555" /* Color del pulgar de desplazamiento al pasar el cursor sobre él */,
  },
  transition: "all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
}));

export const StyledContent = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "calc(91% - 14px)",
  border: theme.mode.border,
  borderBottomRightRadius: "12px",
}));
