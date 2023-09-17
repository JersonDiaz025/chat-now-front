import { StyledSidebarNavbar, StyledTabs } from "./styles";
import { Tab } from "@mui/material";
import { useState } from "react";
import { menuItems } from "./menuItems";
import { useRenderContentSidebar } from "../../../hooks";
import { Typography } from "../../../components";

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
        {menuItems.map(({ id, label, icon: Icon }) => (
          <Tab
            key={id}
            icon={<Icon sx={{ color: '#25c2a0' }} />}
            label={<Typography variant="body2" text={label} />}
            onClick={() => handleRenderContent(id)}
          />
        ))}
      </StyledTabs>
    </StyledSidebarNavbar>
  );
};

export default SidebarNavbar;
