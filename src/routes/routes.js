import { HomePage, Login, Register } from "../pages";
import { ROUTES } from '../constants'

export const routes = [
  {
    path: ROUTES.HOME,
    component: HomePage,
    isLayout: true,
    isPrivate: true
  },
  {
    path: ROUTES.LOGIN,
    component: Login,
    isLayout: false,
    isPrivate: false,
    onlyUnknownUsers: true
  },
  {
    path: ROUTES.REGISTER,
    component: Register,
    isLayout: false,
    isPrivate: false,
    onlyUnknownUsers: true
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
