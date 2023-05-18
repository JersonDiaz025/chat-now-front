import { Button, styled } from '@mui/material';

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0, 2),
  padding: theme.spacing(1, 2),
  width: '100%',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  },
  '&:active': {
    backgroundColor: theme.palette.primary.main
  }
}));
