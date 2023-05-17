import { Paper, styled } from '@mui/material';

export const StyledCardContainer = styled(Paper)(({ theme }) => ({
  marginTop: 2,
  padding: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 280,
  maxWidth: 700,
  textAlign: 'center',
  backgroundColor: 'green',
  // border: 'red solid 2px',
  '& > *': {
    marginBottom: theme.spacing(2)
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    padding: theme.spacing(0),
  }
}));