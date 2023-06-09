import { Box, styled } from '@mui/material';

export const StyledSidebarNavbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: theme.spacing(9, 0, 0, 0),
  padding: theme.spacing(2),
  borderRadius:' 0.5rem',
  alignItems: 'center',
  //minHeight: '100%',
  width: '100%',
  //maxWidth: '420px',
  //overflowX: 'hidden',
  backgroundColor: '#EEE',
  boxShadow: '0 0 0px 1px rgba(0, 0, 0, 0.06)',
  //[theme.breakpoints.down('sm')]: {
  //  height: "auto",
  //  width: '100%',  
  //}
}))