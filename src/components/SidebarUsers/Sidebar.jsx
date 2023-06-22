import { StyledSidebar } from "./styles";
import SidebarNavbar from "./SidebarNavbar/SidebarNavbar";
import { UsersList, ChatList } from "../../pages";
import { useRenderContentSidebar } from "../../hooks";

const renderContenSidebar = ({ activeContent }) => {
  const components = [<ChatList />, <UsersList />];

  return components[activeContent] || null;
};

const SidebarUsers = () => {
  const { activeContent } = useRenderContentSidebar();
  return (
    <StyledSidebar>
      <SidebarNavbar />
      <div style={{ padding: "20px", height: "100vh", overflowY: "auto" }}>
        {renderContenSidebar({ activeContent })}
      </div>
    </StyledSidebar>
  );
};

export default SidebarUsers;
