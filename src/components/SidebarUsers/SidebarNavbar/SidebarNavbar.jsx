import { StyledSidebarNavbar, StyledTabs } from "./styles";
import { Link } from "react-router-dom";
import { Tab } from "@mui/material";
import { useState } from "react";

const SidebarNavbar = () => {
  const [value, setValue] = useState(0);

  return (
    <StyledSidebarNavbar>
      <StyledTabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="CHATS" component={Link} to="" />
        <Tab label="USUARIOS" component={Link} to="" />
        <Tab label="GUARDADOS" component={Link} to="" />
      </StyledTabs>
    </StyledSidebarNavbar>
  );
};

export default SidebarNavbar;
