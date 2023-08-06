import { useUser } from "../../hooks/index";
import { StyledHome, StyledContentSidebar } from "./styles";
import { ChatView, SidebarUsers, HeaderChatView } from "../../components";

const HomePage = () => {
  const user = useUser();

  return (
    <StyledHome>
      <StyledContentSidebar>
        <SidebarUsers />
      </StyledContentSidebar>
      {/*<div style={{ height: "100%", width: '100%', marginTop: '0px' }}>*/}
      <section style={{ width: '70%', float: '', height: 'calc(86% - 14px)' }}>
      <HeaderChatView />
        <ChatView />
      </section>
      {/*</div>*/}
    </StyledHome>
  );
};

export default HomePage;
