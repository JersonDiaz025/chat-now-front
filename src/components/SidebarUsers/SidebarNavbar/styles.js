import { Box, styled, Tabs, Tab } from "@mui/material";

export const StyledSidebarNavbar = styled(Box)(({ theme }) => ({
  display: "flex",
  position: 'sticky',
  top: '0',
  zIndex: 500,
  padding: '1px',
  background: theme.mode.backgroundNavbarSidebar,
  //flexWrap: "wrap",
  justifyContent: "center",
  //margin: theme.spacing(8, 0, 0, 0),
  fontFamily: "Droid Sans,Open Sans, Helvetica, Arial",
  fontWeight: theme.typography.fontWeight,
  //flexDirection: 'row',
  //position: 'sticky',
  //padding: theme.spacing(0,1,0,1),
  gap: '10px',
  alignItems: "center",
  //minHeight: '100%',
  width: "100%",
  //maxWidth: '420px',
  //overflow: 'hidden',
  //background: theme.mode.background,
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',
  //[theme.breakpoints.down('sm')]: {
  //  height: "auto",
  //}

  border: theme.mode.border,
}));

export const StyledTabs = styled(Tabs)(({ theme })=> ({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  //backgroundColor: 'red ',
  width: "100% ",
  maxWidth: '100%',
  //padding: '0',
  margin: '0',
  //color: 'inherit'
  //"& .MuiTabs-indicator": {
  //  backgroundColor: 'red', // Color de fondo del indicador
  //},
  '& .css-1ueh17f-MuiTabs-indicator': {
    background: '#25c2a0'
  },

  
 

  //transition: "transform 0.3s",

  //"& .Mui-selected .MuiTabs-indicator": {
  //  transform: "scaleX(1)", // Ancho completo del tab seleccionado
  //},
}));
