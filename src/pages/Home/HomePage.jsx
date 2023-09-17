import { useUser, userSelectedChat} from "../../hooks/index";
import { StyledHome, StyledContent } from "./styles";
import { ChatView, SidebarUsers, HeaderChatView } from "../../components";

const HomePage = () => {
  const user = useUser();
  const {authorSelected} = userSelectedChat()
  //const data = { name: "jose", image: "Jose Rivera" };


  return (
    <StyledHome>
      <SidebarUsers />
      <StyledContent>
        <ChatView data={authorSelected} />
      </StyledContent>
    </StyledHome>
  );
};

export default HomePage;
