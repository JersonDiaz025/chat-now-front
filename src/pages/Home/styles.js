import { Box, Paper, styled } from "@mui/material";

export const StyledHome = styled(Box)(({ theme }) => ({
  height: 'calc(100% - 16px)',
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
}));

export const StyledContentSidebar = styled(Paper)(({ theme }) => ({
  //background: "red",
  //padding: '1px',
  //position: "sticky",
  //top: "0",
  //backgroundColor: "blue",
  height: "100%",
  //display: "flex",
  //flexDirection: "column",
  //overflowY: 'scroll',
  //width: '100%',
  //minWidth: '150px',
  //maxWidth: '300px',
  //width: '100%',
  //[theme.breakpoints.down('sm')]: {
  //  //margin: 1,
  //  width: '100%',
  //  padding: 1,
  //  height: "100%",
  //}
  //marginTop: "88px",
  //float: "left",
  //width: '500px',
  //height: '100%',
  //background: '#1783db',
  //position: 'fixed',
  //top: '90px',
  //left: '90px',
  //color: "white",
  //fontSize: '18px',
  //zIndex: 300,
  //overflow: 'hidden',
  //overflowY: 'scroll',
  //borderRight: '20px solid #1783db',
  "& ::-webkit-scrollbar": {
    display: 'none',
    width: '6px'
  },
  "& ::-webkit-scrollbar-track": {
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
  backgroundColor: theme.mode.background,
}));
