import { HomePage, Login, Register } from "../pages";

export const routes = [
  {
    path: "/",
    component: HomePage,
    isLayout: true,
  },
  {
    path: "/login",
    component: Login,
    isLayout: false,
  },
  {
    path: "/register",
    component: Register,
    isLayout: false,
  },
  //{
  //  path: '/chats',
  //  component: ,
  //  isLayout: true,
  //},
  //{
  //  path: '/messages',
  //  component: ViewForums,
  //  isLayout: true,
  //},
  {
    path: "*",
    component: HomePage,
    isLayout: true,
  },
];
