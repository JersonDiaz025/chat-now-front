import { Box, styled } from "@mui/material";

export const StyledHome = styled(Box)(({ theme }) => ({
  //padding: 0,
  //width: "100%",
  //height: "100%",
  //maxHeight: "100%",
  //position: "relative",
  //display: "flex",
  //minHeight: "100%",
  overflow: "hidden",
  //alignItems: 'center',
  //display: "grid",
  //gridTemplateColumns: "20rem auto",
  backgroundColor: theme.mode.background,
  //margin: theme.spacing(10, 0, 0, 0),
  //background: 'red'

  //[theme.breakpoints.down('sm')]: {
  //  //margin: 1,
  //  width: '100%',
  //  padding: 1,
  //  height: "100%",
  //}
}));

export const StyledContentSidebar = styled(Box)(({ theme }) => ({
  background: "red",
  //marginTop: "-5rem",
  //position: "sticky",
  top: "0",
  //backgroundColor: "blue",
  //height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflowY: 'scroll',

  //[theme.breakpoints.down('sm')]: {
  //  //margin: 1,
  //  width: '100%',
  //  padding: 1,
  //  height: "100%",
  //}
}));
