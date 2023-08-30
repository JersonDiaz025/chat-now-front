import { Box, styled, Paper} from '@mui/material';

export const StyledChatView = styled(Box)(({ theme }) => ({
  padding: '1px',
  width: '100%',
  //marginTop: '0px',
  //overflowY: 'scroll',
  display: 'flex',
  justifyContent: 'space-between',
  //alignItems: 'flex-start',
  flexDirection: 'column',
  backgroundColor: theme.mode.colorHeader,
  //boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',
  borderRadius: '1.2em',

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

  height: '100%',

}));


export const StyledChatAppContainer = styled(Box)(({ theme }) => ({
  //borderRadius: '30px'
  //boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)',
  
  padding: '15px',
  backgroundColor: theme.mode.colorHeader,
  overflowY: "auto",
  flex: 1,
  flexDirection: 'column',
  height: '100%',
  background: '#fff',
  //borderRadius: '30px',
}));