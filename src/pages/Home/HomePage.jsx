import { useUser } from "../../hooks/index";
import { StyledHome, StyledContentSidebar } from "./styles";
import { SidebarUsers } from "../../components";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React, { useState } from "react";

const ARR = new Array(20)
const HomePage = () => {
  const user = useUser();

  const [toggled, setToggled] = React.useState(false);

  return (
    <StyledHome>
      <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
        <Sidebar
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          breakPoint="always"
        >
          <Menu>
            {
            
            ARR.map(() => <MenuItem> Calendar</MenuItem>)}
         
          </Menu>
        </Sidebar>
        <main style={{ display: "flex", padding: 10 }}>
          <div>
            <button className="sb-button" onClick={() => setToggled(!toggled)}>
              Toggle
            </button>
          </div>
        </main>
      </div>
    </StyledHome>
  );
};

export default HomePage;
