import { createSlice } from "@reduxjs/toolkit";
import { getUserToken } from "../../utils/index";

const initialState = {
  isLoggedIn: !getUserToken(),
  //token: "",
  userData: null,
};

export const userStateSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      const { user } = action.payload;
      state.isLoggedIn = getUserToken();
      //state.token = token;
      state.userData = user;
    },
  },
});

export const { signInUser } = userStateSlice.actions;

export default userStateSlice.reducer;
