import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import rootClient from "../../config/rootClient";

const initialState = {
  isloading: false,
  login: false,
  errorMessage: null,
  user: {},
  online_users: [{}],
};

export const login = createAsyncThunk("user-login", async (user) => {
  let response = await rootClient.post("api/v1/login", user);
  // console.log(response.data.user);
  return response.data;
});

export const logout = createAsyncThunk("user-logout", async () => {
  // console.log("callll");
  let response = await rootClient.post("api/v1/logout");
  return response.data.success;
});

export const getOnlineUser = createAsyncThunk("online-user", async () => {
  // console.log("callll");
  let response = await rootClient.get("api/v1/admin/online-users");
  // console.log("callll", response.data);
  return response.data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.login = true;
      state.user = action.payload.user;
      // localStorage.setItem("access-token", action.payload.accesToken);
    },
    [login.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Wrong email and password ";
    },
    [login.pending]: (state) => {
      state.isloading = true;
    },
    // logout ---------------------------------------------
    [logout.fulfilled]: (state, action) => {
      state.login = false;
      // console.log(action.payload);
    },
    [logout.rejected]: (state, action) => {
      state.isloading = false;
    },
    [logout.pending]: (state) => {
      state.isloading = true;
    },
    // online users  ---------------------------------------------
    [getOnlineUser.fulfilled]: (state, action) => {
      state.online_users = action.payload;
      console.log(action.payload);
    },
    [getOnlineUser.rejected]: (state, action) => {
      state.isloading = false;
    },
    [getOnlineUser.pending]: (state) => {
      state.isloading = true;
    },
  },
});
// export const { logout } = userSlice.actions;
export default userSlice.reducer;
