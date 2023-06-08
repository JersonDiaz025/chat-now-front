import useUser from "../../hooks/useUser";
import { StyledHome } from "./styles";
import {SidebarUsers} from "../../components";

const HomePage = () => {
  const user = useUser();

  return (
    <StyledHome>
      <SidebarUsers/>
      <p>fdgdfgfdg</p>
    </StyledHome>
  );
};

export default HomePage;
