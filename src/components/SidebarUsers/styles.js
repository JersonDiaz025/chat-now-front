import { Box, styled } from '@mui/material';

export const StyledSidebar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100%',
  width: '420px',
  maxWidth: '420px',
  backgroundColor: '#f4f4f5',
  boxShadow: "rgb(1 5 3 / 25%) 0 0 15px -6px, rgb(0 0 0 / 30%) 0 0 5px -1px",
  //overflowX: 'hidden',
  //backgroundColor: 'gray',
  //[theme.breakpoints.down('sm')]: {
  //  height: "auto",
  //  width: '100%',  
  //}
}))
