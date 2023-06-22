import { Box, styled } from '@mui/material';

export const StyledSidebar = styled(Box)(({ theme }) => ({
  //display: 'flex',
  //justifyContent: 'flex-start',
  //alignItems: 'center',
  //flexDirection: 'column',
  //minHeight: '100%',
  //height: '100vh',
  //width: '420px',
  //maxWidth: '420px',
  backgroundColor: theme.mode.background,
  boxShadow: "rgb(1 5 3 / 25%) 0 0 15px -6px, rgb(0 0 0 / 30%) 0 0 5px -1px",
  //overflowY: 'scroll',
  //backgroundColor: 'gray',
  //[theme.breakpoints.down('sm')]: {
  //  height: "auto",
  //  width: '100%',  
  //}
  //overflowY: 'auto',
  //height: '100vh',
  //padding: '10px',
  '&::-webkit-scrollbar': {
    width: '9px', /* Ancho de la barra de desplazamiento */
  },
  '&::-webkit-scrollbar-track': {
    //background: '#f1f1f1', /* Color de fondo de la pista de desplazamiento */
    backgroundColor: theme.mode.background,

  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888', /* Color del pulgar de desplazamiento */
    //backgroundColor: theme.mode.background,
    borderRadius: '50px',
  },
  //'& hover::-webkit-scrollbar-thumb:hover': {
  //  background: '#555', /* Color del pulgar de desplazamiento al pasar el cursor sobre él */
    
  //},
}))
