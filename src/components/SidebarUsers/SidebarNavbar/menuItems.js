import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";

export const menuItems = [
  { id: 0, label: "CHATS", component: Link, path: ROUTES.CHATS },
  { id: 1, label: "USUARIOS", component: Link, path: ROUTES.USERS },
  { id: 2, label: "GUARDADOS", component: Link, path: "" },
];
