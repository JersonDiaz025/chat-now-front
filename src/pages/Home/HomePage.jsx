import useUser from "../../hooks/useUser";
import { StyledHome } from "./styles";
import {SidebarUsers} from "../../components";

const HomePage = () => {
  const user = useUser();

  return (
    <StyledHome>
      <SidebarUsers />
      <div>
        fdgj
      </div>
    </StyledHome>
  );
};

export default HomePage;
