import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import cocktailsSlice from "./cocktails/cocktailsSlice";

const persistRegistrConfig = {
  key: "auth",
  storage,
  blacklist: ["status"],
};
const persistedRegistrReducer = persistReducer(
  persistRegistrConfig,
  cocktailsSlice
  //   transactionsReducer
);

export const rootReducer = combineReducers({
  cocktails: persistedRegistrReducer,
  //   transactions: transactionsReducer,
});
