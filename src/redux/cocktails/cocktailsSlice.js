import { createSlice } from "@reduxjs/toolkit";
import { getRandomCocktail } from "./cocktailsOperations";

export const StatusForAll = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const initialState = {
  cocktails: null,
  status: null,
};
const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRandomCocktail.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.user = payload;
    });
  },
});

export default cocktailsSlice.reducer;
