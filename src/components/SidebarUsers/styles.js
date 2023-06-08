import { Box, styled } from '@mui/material';

export const StyledSidebar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100%',
  width: '30%',
  backgroundColor: 'green',
  //overflowX: 'hidden',
  //backgroundColor: 'gray',
  //[theme.breakpoints.down('sm')]: {
  //  height: "auto",
  //  width: '100%',  
  //}
}))
