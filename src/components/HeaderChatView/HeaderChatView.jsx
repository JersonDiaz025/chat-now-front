import { StyledHeaderChatView } from "./styles";
import Avatar from "@mui/material/Avatar";
import { Typography } from "../../components";

const HeaderChatView = () => {
  return (
    <StyledHeaderChatView>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        <Typography
          variant='body1'
          text='LOGO'
          classes={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "",
          }}
        />
      </div>
    </StyledHeaderChatView>
  );
};

export default HeaderChatView;
