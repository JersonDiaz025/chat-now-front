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
  //overflowX: 'hidden',
  //backgroundColor: 'gray',
  //[theme.breakpoints.down('sm')]: {
  //  height: "auto",
  //  width: '100%',  
  //}
}))
