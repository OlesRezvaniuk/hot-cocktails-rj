import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "./authOperations";

export const StatusForAll = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const initialState = {
  auth: null,
  status: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAuth.fulfilled, (state, action) => {
      state.status = StatusForAll.success;
      state.user = console.log(action);
    });
  },
});

export default authSlice.reducer;
