import { StyledSidebarNavbar } from "./styles";
import { Link } from "react-router-dom";

const SidebarNavbar = () => {
  return (
    <StyledSidebarNavbar>
      <div style={{ width: "100%", display: 'flex', justifyContent: "space-around", alignItems:'center' }}>
        <Link to="">CHATS</Link>
        <Link to="">USUARIOS</Link>
      </div>
    </StyledSidebarNavbar>
  );
};

export default SidebarNavbar;
