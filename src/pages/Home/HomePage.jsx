import { useUser } from "../../hooks/index";
import { StyledHome, StyledContentSidebar } from "./styles";
import { SidebarUsers } from "../../components";

const HomePage = () => {
  const user = useUser();

  return (
    <StyledHome>
      <div
        style={{
          width: "100%",
          //backgroundColor: "green",
          maxWidth: "300px",
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
      <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
        <main style={{ display: "flex", padding: 10 }}></main>
      </div>
    </StyledHome>
  );
};

export default HomePage;
