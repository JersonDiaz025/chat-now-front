import { Box, styled } from '@mui/material';

export const StyledCenterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100%',
  overflowX: 'hidden',
  //backgroundColor: 'gray',
  [theme.breakpoints.down('sm')]: {
    height: "auto",
    width: '100%',  
  }
}))
