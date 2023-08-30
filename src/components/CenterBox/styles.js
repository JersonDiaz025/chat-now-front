import { Box, styled } from '@mui/material';

export const StyledCenterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100%',
  overflowX: 'hidden',
  //position: 'relative',
  [theme.breakpoints.down('sm')]: {
    background: 'linear-gradient(90deg, #3c95f4 65%, #3385dc 100%)',
    height: "auto",
    width: '100%',  
  }
}))
