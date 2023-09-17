import { StyledNavList } from "./styles";
import { Typography } from "../../components";
import Avatar from "@mui/material/Avatar";
import { userSelectedChat } from "../../hooks";

const NavList = ({ data }) => {
  const { authorSelected, handleSelected } = userSelectedChat();

  return (
    <StyledNavList>
      {data.map(({ id, nombre, imagen }, index) => (
        <span
          key={index}
          onClick={() => handleSelected({ id, nombre, imagen })}
          style={{
            backgroundColor: `${authorSelected?.id === id ? "#25c2a0" : ""}`,
            borderRadius: "8px",
            display: "flex",
            gap: "20px",
            padding: "10px",
            justifyItems: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Avatar alt={nombre} src={imagen} />
          <Typography
            variant="body2"
            text={nombre}
            classes={{
              //color: "#5f6368",
              fontSize: "14px",
              lineHeight: "1.25rem",
              fontWeight: 700,
              //color: "#1C1E21",
            }}
          />
        </span>
      ))}
    </StyledNavList>
  );
};

export default NavList;
