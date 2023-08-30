import { StyledHeaderChatView } from "./styles";
import Avatar from "@mui/material/Avatar";
import { Typography } from "../../components";

const HeaderChatView = ({data}) => {
  return (
    <StyledHeaderChatView>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar alt={data.image} src="/static/images/avatar/2.jpg" />
        <Typography
          variant='body1'
          text={data?.name}
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
