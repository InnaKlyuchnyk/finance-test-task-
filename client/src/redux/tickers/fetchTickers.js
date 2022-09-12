import { createAsyncThunk } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4000");
socket.emit("start");

export const fetchTickers = createAsyncThunk(
  "/tickers",
  async (credentials) => {
    try {
      const responce = await socket.on("ticker", function (data) {
        // console.log("data", data);
        return data;
      });
      console.log("responce", responce);
    } catch {
      return credentials.rejectWithValue();
    }
  }
);
