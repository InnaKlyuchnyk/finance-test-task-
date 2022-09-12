import { createSlice } from "@reduxjs/toolkit";
import { fetchTickers } from "./fetchTickers";

const initialState = {
  tickers: [],
};

const tickersSlice = createSlice({
  name: "ticker",
  initialState,
  extraReducers: {
    [fetchTickers.fulfilled](state, action) {
      console.log("action", action);
      console.log("state", state);
      state.tickers = action.payload;
    },
    [fetchTickers.rejected](state) {
      state.tickers = null;
    },
  },
});

export default tickersSlice.reducer;
