import { Box, styled } from '@mui/material';

export const StyledNavList = styled(Box)(({ theme }) => ({
  //margin: theme.spacing(1, 0, 0, 0),
  backgroundColor: "",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  "& :hover": {
    backgroundColor: theme.mode.colorIcon,
  }
  //padding: 0,
  //width: '100%',
  //height: '100%',
  //display: 'flex',
  //justifyContent: 'center',
  //alignItems: 'center',
  //flexDirection: 'column',

  //[theme.breakpoints.down('sm')]: {
  //  //margin: 1,
  //  width: '100%',
  //  padding: 1,
  //  height: "100%",
  //}
}));