import { Box, styled } from '@mui/material';

export const StyledRegister = styled(Box)(({ theme }) => ({
  padding: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  //[theme.breakpoints.down('sm')]: {
  //  margin: theme.spacing(1),
  //  height: "100%",
  //}
}));