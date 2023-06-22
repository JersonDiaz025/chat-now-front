import { Box, styled, Tabs, Tab } from "@mui/material";

export const StyledSidebarNavbar = styled(Box)(({ theme }) => ({
  display: "flex",
  position: 'sticky',
  top: '73px',
  //flexWrap: "wrap",
  justifyContent: "center",
  margin: theme.spacing(8, 0, 0, 0),
  fontFamily: "Droid Sans,Open Sans, Helvetica, Arial",
  fontWeight: theme.typography.fontWeight,
  //flexDirection: 'row',
  //position: 'sticky',
  padding: theme.spacing(0,1,0,1),
  alignItems: "center",
  //minHeight: '100%',
  width: "100%",
  //maxWidth: '420px',
  //overflowX: 'hidden',
  background: theme.mode.background,
  boxShadow: "rgb(1 5 3 / 25%) 0 0 15px -6px, rgb(0 0 0 / 30%) 0 0 1px -12px",
  //[theme.breakpoints.down('sm')]: {
  //  height: "auto",
  //}
}));

export const StyledTabs = styled(Tabs)(({ theme })=> ({
  display: "flex",
  //backgroundColor: 'red ',
  width: "100% ",
  //color: 'inherit'
  //"& .MuiTabs-indicator": {
  //  backgroundColor: 'red', // Color de fondo del indicador
  //},
 

  //transition: "transform 0.3s",

  //"& .Mui-selected .MuiTabs-indicator": {
  //  transform: "scaleX(1)", // Ancho completo del tab seleccionado
  //},
}));
