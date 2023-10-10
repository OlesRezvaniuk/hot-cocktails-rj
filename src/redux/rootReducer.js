import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import cocktailsSlice from "./cocktails/cocktailsSlice";
import authSlice from "./auth/authSlice";

const persistRegistrConfig = {
  key: "auth",
  storage,
  blacklist: ["status"],
};
const persistedRegistrReducer = persistReducer(
  persistRegistrConfig,
  cocktailsSlice,
  authSlice
);

export const rootReducer = combineReducers({
  cocktails: persistedRegistrReducer,
  auth: authSlice,
});
