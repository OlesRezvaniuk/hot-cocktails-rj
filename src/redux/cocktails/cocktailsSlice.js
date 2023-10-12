import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, getFavoriteCocktails } from "./cocktailsOperations";

export const StatusForAll = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const initialState = {
  cocktails: null,
  status: null,
  favoriteCocktails: null,
};
const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addFavorite.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.favoriteCocktails = payload;
    });
    builder.addCase(getFavoriteCocktails.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.favoriteCocktails = payload;
    });
  },
});

export default cocktailsSlice.reducer;
