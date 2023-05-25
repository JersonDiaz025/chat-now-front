import { HomePage, Login, Register } from "../pages";

export const routes = [
  {
    path: "/home",
    component: HomePage,
    isLayout: true,
    isPrivate: true
  },
  {
    path: "/login",
    component: Login,
    isLayout: false,
    isPrivate: false
  },
  {
    path: "/register",
    component: Register,
    isLayout: false,
    isPrivate: false
  },
  //{
  //  path: '/chats',
  //  component: ,
  //  isLayout: true,
  //isPrivate: true
  //},
  //{
  //  path: '/messages',
  //  component: ViewForums,
  //  isLayout: true,
  //isPrivate: true
  //},
  //{
  //  path: "*",
  //  component: Login,
  //  isLayout: false,
  //  isPrivate: false
  //},
];
