import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
      immutableCheck: false,
    }),
});
export const persistor = persistStore(store);
