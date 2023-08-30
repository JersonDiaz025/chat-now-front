import { Box, styled } from "@mui/material";

export const StyledBackground = styled(Box)(({ theme }) => ({
  
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    background: 'red',
    zIndex: -1,
    '&::before, &::after': {
      content: '""', // Fix here
      position: 'absolute',
      inset: '-170px auto auto -200px',
      width: 'clamp(30vw, 600px, 42vw)',
      height: 'clamp(30vw, 600px, 42vw)',
      borderRadius: '50%',
      background: '#1e6dbf',
      zIndex: -1,
    },
    '&::after': {
      inset: 'auto -170px -200px auto',
    },
    [theme.breakpoints.down('sm')]: {
      '&::before, &::after': {
        width: '25rem',
        height: '25rem',
      },
    },
}));
