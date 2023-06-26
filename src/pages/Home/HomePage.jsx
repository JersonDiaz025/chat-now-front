import { useUser } from "../../hooks/index";
import { StyledHome, StyledContentSidebar } from "./styles";
import { ChatView, SidebarUsers } from "../../components";

const HomePage = () => {
  const user = useUser();

  return (
    <StyledHome>
      <div
        style={{
          width: "100%",
          //backgroundColor: "green",
          maxWidth: "320px",
          minWidth: "150px",
          position: "sticky",
          top: "0",
          height: "100%",
        }}
      >
        <StyledContentSidebar>
          <SidebarUsers />
        </StyledContentSidebar>
      </div>
      <div style={{ height: "100%", width: '100%', marginTop: '0px' }}>
        <ChatView/>
      </div>
    </StyledHome>
  );
};

export default HomePage;
