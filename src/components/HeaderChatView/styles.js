import { Box, styled, AppBar } from '@mui/material';

export const StyledHeaderChatView = styled(Box)(({theme}) => ({
  width: '100%',
  //height: '100%',
  //position: 'static',
  backgroundColor: theme.backgroundColor ,
  padding: '9px',
  display: 'flex',
  justifyContent: 'center',
  //flexDirection: 'column',
  alignItems: 'center',
  boxShadow: 'rgb(1 5 3 / 25%) 0 0 15px -6px, rgb(0 0 0 / 30%) 0 0 1px -12px',

  //maxWidth: 400,
  //marginBottom: theme.spacing(2),
}));
