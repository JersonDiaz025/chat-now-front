import { StyledNavList } from "./styles";
import { useState } from "react";
import { Typography } from "../../components";
import Avatar from "@mui/material/Avatar";

const NavList = ({ data }) => {
  const [active, setActive] = useState(null);
  return (
    <StyledNavList>
      {data.map((item, index) => (
        <span
          key={index}
          onClick={() => setActive(index)}
          style={{
            backgroundColor: `${active === index ? "#33BF54" : ""}`,
            borderRadius: "8px",
            display: "flex",
            gap: "20px",
            padding: "10px",
            justifyItems: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Avatar alt={item.nombre} src={item.imagen} />
          <Typography variant="body2" text={item.nombre} />
        </span>
      ))}
    </StyledNavList>
  );
};

export default NavList;
