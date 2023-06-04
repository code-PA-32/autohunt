import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_PAGE_LOGOS } from "config";
import { Status } from "types";
import { Logo } from "types/logo";

export const getPageLogos = createAsyncThunk<{ data: Logo[] }, undefined>(
  "mainPageLogos/getLogos",
  async () => {
    return await axios.get(GET_PAGE_LOGOS);
  }
);

type AppState = {
  logos: Logo[];
  status: Status;
};

const initialState: AppState = {
  logos: [],
  status: "idle",
};

const mainPageLogosSlice = createSlice({
  name: "mainPageLogos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPageLogos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getPageLogos.fulfilled,
        (state, action: PayloadAction<{ data: Logo[] }>) => {
          state.logos = action.payload.data;
          state.status = "idle";
        }
      )
      .addCase(getPageLogos.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const mainPageLogosReducer = mainPageLogosSlice.reducer;
