import { Box, styled } from '@mui/material';

export const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  maxWidth:"1640",
  zIndex: 50,
  top: 0,
  //background: '#fff',
  backgroundColor: theme.mode.background,
  borderBottom: '1px solid #E7EBF0',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  alignItems: 'center',
  
  //boxShadow: 'rgb(1 5 3 / 25%) 0 0 15px -6px, rgb(0 0 0 / 30%) 0 0 1px -12px',
  //justifyContent: 'center',
  //alignItems: 'center',
  width: '100%',
  //minHeight: '100%',
  //overflowX: 'hidden',
  //backgroundColor: 'gray',
  
  //backgroundColor: 'gray',
  //[theme.breakpoints.down('sm')]: {
    //height: "auto",
    //width: '100%',  
  //}
}))
