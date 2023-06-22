import { StyledSidebarNavbar, StyledTabs } from "./styles";
//import { Link } from "react-router-dom";
import { Tab } from "@mui/material";
import { useState } from "react";
//import { ROUTES } from "../../../constants";
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
        //indicatorColor="primary"
      >
        {menuItems.map(({ id, label, component, path }) => (
          <Tab
            key={id}
            label={label}
            component={component}
            //to={path}
            onClick={() => handleRenderContent(id)}
          />
        ))}
      </StyledTabs>
    </StyledSidebarNavbar>
  );
};

export default SidebarNavbar;
