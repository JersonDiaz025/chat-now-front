import { Box, styled } from "@mui/material";

export const StyledCardContainer = styled(Box)(({ theme }) => ({
  //marginTop: theme.spacing(9),
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 460,
  maxWidth: 700,
  height: "100%",
  textAlign: "center",
  "& a": {
    textDecoration: "none",
    color: "blue",
    textAlign: 'left',
  },
  [theme.breakpoints.between("xs", "sm")]: {
    padding: 0,
  },
}));