import { StyledUsersList } from "./styles";
import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const data = [
  {
    nombre: "Juan Mendez",
    imagen: "/static/images/avatar/1.jpg",
  },
  {
    nombre: "María Rodríguez",
    imagen: "/static/images/avatar/2.jpg",
  },
  {
    nombre: "Carlos López",
    imagen: "/static/images/avatar/3.jpg",
  },
  // ... Agrega los 97 objetos restantes con nombres e imágenes
  {
    nombre: "Ana González",
    imagen: "/static/images/avatar/4.jpg",
  },
  {
    nombre: "Luis Ramirez",
    imagen: "/static/images/avatar/5.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
];

const UsersList = () => {
  const [active, setActive] = useState(0);
  return (
    <StyledUsersList>
      <nav
        style={{
          backgroundColor: "",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        {data.map((item, index) => (
          <span
            key={index}
            onClick={()=> setActive(index)}
            style={{
              backgroundColor: `${active === index ? 'rgba(35,39,47,.08)' : ''}`,
              borderRadius: '8px',
              display: "flex",
              gap: "20px",
              padding: "10px",
              justifyItems: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Avatar alt={item.nombre} src={item.imagen} />
            <Typography variant="h7">{item.nombre}</Typography>
          </span>
        ))}
      </nav>
    </StyledUsersList>
  );
};

export default UsersList;
