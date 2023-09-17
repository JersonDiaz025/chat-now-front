import { StyledHeaderChatView } from "./styles";
import Avatar from "@mui/material/Avatar";
import { Typography } from "../../components";

const HeaderChatView = ({ data }) => {
  console.log(data)
  return (
    <StyledHeaderChatView>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar alt={data?.nombre} src="/static/images/avatar/2.jpg" />
        <div>
          <Typography
            variant="body1"
            text={data?.nombre}
            classes={{
              //color: "#5f6368",
              fontSize: "14px",
              lineHeight: "1.25rem",
              fontWeight: 700,
              //color: "#1C1E21",
            }}
          />
          {/*<span style={{fontSize: '12px', color: ''}}>En linea...</span>*/}
        </div>
      </div>
    </StyledHeaderChatView>
  );
};

export default HeaderChatView;
