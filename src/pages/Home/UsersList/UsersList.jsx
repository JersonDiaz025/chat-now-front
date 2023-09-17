//import { StyledUsersList } from "./styles";
import { NavList } from "../../../components";

const data = [
  {
    id: 0,
    nombre: "Juan Mendez",
    imagen: "/static/images/avatar/1.jpg",
  },
  {
    id: 1,
    nombre: "María Rodríguez",
    imagen: "/static/images/avatar/2.jpg",
  },
  {
    id: 2,
    nombre: "Carlos López",
    imagen: "/static/images/avatar/3.jpg",
  },
  // ... Agrega los 97 objetos restantes con nombres e imágenes
  {
    id: 3,
    nombre: "Ana González",
    imagen: "/static/images/avatar/4.jpg",
  },
  {
    id: 4,
    nombre: "Luis Ramirez",
    imagen: "/static/images/avatar/5.jpg",
  },
  {
    id: 5,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 6,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 7,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 8,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 9,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 10,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 11,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 12,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 13,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 14,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 15,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 16,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 17,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 18,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
  {
    id: 19,
    nombre: "Ximena Herrera",
    imagen: "/static/images/avatar/100.jpg",
  },
];

const UsersList = () => {
  return <NavList data={data} />;
};

export default UsersList;
