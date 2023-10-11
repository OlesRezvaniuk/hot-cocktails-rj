import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import cocktailsReducer from "./cocktails/cocktailsSlice";
import authReducer from "./auth/authSlice";

const persistRegistrConfig = {
  key: "auth",
  storage,
  blacklist: ["status"],
};
const persistedRegistrReducer = persistReducer(
  persistRegistrConfig,
  authReducer
);

export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
  cocktails: cocktailsReducer,
});
