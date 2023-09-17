import { Box, styled, AppBar } from '@mui/material';

export const StyledHeaderChatView = styled(Box)(({theme}) => ({
  width: '100%',
  //height: '100%',
  position: 'static',
  zIndex:50,
  backgroundColor: theme.mode.colorHeader,
  //padding: '10px',
  display: 'flex',
  //justifyContent: 'center',
  padding: '9px',
  //flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',

  //maxWidth: 400,
  //marginBottom: theme.spacing(2),
}));
