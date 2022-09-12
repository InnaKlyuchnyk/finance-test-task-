import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import tickersSlice from "./tickers/tickersSlice";

export const store = configureStore({
  reducer: {
    tickers: tickersSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

setupListeners(store.dispatch);
