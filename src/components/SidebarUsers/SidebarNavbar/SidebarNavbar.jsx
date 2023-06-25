import { StyledSidebarNavbar, StyledTabs } from "./styles";
import { Tab } from "@mui/material";
import { useState } from "react";
import { menuItems } from "./menuItems";
import { useRenderContentSidebar } from "../../../hooks";

const SidebarNavbar = () => {
  const [value, setValue] = useState(0);

  const { handleRenderContent } = useRenderContentSidebar();

  return (
    <StyledSidebarNavbar>
      <StyledTabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        textColor="primary"
      >
        {menuItems.map(({ id, label }) => (
          <Tab key={id} label={label} onClick={() => handleRenderContent(id)} />
        ))}
      </StyledTabs>
    </StyledSidebarNavbar>
  );
};

export default SidebarNavbar;
