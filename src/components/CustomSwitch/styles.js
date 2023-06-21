import { styled, Box } from "@mui/material";

export const StyledSwitch = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  //height: '50',
  justifyContent: "center",
  alignItems: "center",
  //padding: '4px',
  width: "3rem",
  height: "3rem",
  "& :hover": {
    padding: "8px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    backgroundColor: theme.mode.colorIcon,
  },
}));
