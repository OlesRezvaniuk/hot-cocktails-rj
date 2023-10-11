import { createSlice } from "@reduxjs/toolkit";
import { getAuth, singOut } from "./authOperations";

export const StatusForAll = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const initialState = {
  auth: null,
  token: null,
  status: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAuth.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.auth = payload.user;
      state.token = payload.user.accessToken;
    });
    builder.addCase(singOut.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.auth = null;
      state.token = null;
    });
  },
});

export default authSlice.reducer;
