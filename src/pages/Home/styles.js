import { Box, styled } from "@mui/material";

export const StyledHome = styled(Box)(({ theme }) => ({
  //padding: 0,
  width: "100%",
  height: "100%",
  maxHeight: "100%",
  position: "relative",
  display: "flex",
  backgroundColor: "gray",
  minHeight: "100%",
  overflow: "hidden",
  alignItems: 'center',


  //[theme.breakpoints.down('sm')]: {
  //  //margin: 1,
  //  width: '100%',
  //  padding: 1,
  //  height: "100%",
  //}
}));
