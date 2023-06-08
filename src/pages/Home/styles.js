import { Box, styled } from '@mui/material';

export const StyledHome = styled(Box)(({ theme }) => ({
  padding: 0,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  maxHeight: '100vh',
  overflow: '',
  position: 'relative',
  display: 'flex',
  backgroundColor: 'gray'
  //justifyContent: 'center',
  //alignItems: 'center',
  //flexDirection: 'column',

  //[theme.breakpoints.down('sm')]: {
  //  //margin: 1,
  //  width: '100%',
  //  padding: 1,
  //  height: "100%",
  //}
}));

