import { Box, styled, Paper} from '@mui/material';

export const StyledChatView = styled(Box)(({ theme }) => ({
  //padding: 0,
  //width: '100%',
  //marginTop: '0px',
  height: '100%',
  //overflowY: 'scroll',
  //display: 'flex',
  //justifyContent: 'center',
  //alignItems: 'flex-start',
  //flexDirection: 'column',
  backgroundColor: theme.mode.background,
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',

  //[theme.breakpoints.down('sm')]: {
  //  //margin: 1,
  //  width: '100%',
  //  padding: 1,
  //  height: "100%",
  //}


  //backgroundColor: '#fff',
  //padding: '30px',
  //borderRadius: '4px',

  position: 'relative',
}));