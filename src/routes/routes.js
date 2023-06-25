import { HomePage, Login, Register, UsersList, ChatList } from "../pages";
import { ROUTES } from "../constants";

export const routes = [
  {
    path: ROUTES.HOME,
    component: HomePage,
    isLayout: true,
    isPrivate: true,
    onlyUnknownUsers: false,
  },
  {
    path: ROUTES.LOGIN,
    component: Login,
    isLayout: false,
    isPrivate: false,
    onlyUnknownUsers: true,
  },
  {
    path: ROUTES.REGISTER,
    component: Register,
    isLayout: false,
    isPrivate: false,
    onlyUnknownUsers: true,
  },
  //{
  //  path: ROUTES.CHATS,
  //  component: ChatList,
  //  isLayout: true,
  //  isPrivate: true,
  //  onlyUnknownUsers: false,
  //},
  //{
  //  path: ROUTES.USERS,
  //  component: UsersList,
  //  isLayout: true,
  //  isPrivate: true,
  //},
  //{
  //  path: ROUTES.CHAT_VIEW,
    
  //},
  //{
  //  path: "*",
  //  component: Login,
  //  isLayout: false,
  //  isPrivate: false
  //},
];
