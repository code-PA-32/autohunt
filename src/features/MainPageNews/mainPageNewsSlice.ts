import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_POPULAR_NEWS } from "config";
import {  NewsMainCard, Status } from "types";

export const getPopularNews = createAsyncThunk<{ data: NewsMainCard[] }, undefined>(
  "news/popular",
  async () => {
    return await axios.get(GET_POPULAR_NEWS);
  }
);

type AppState = {
  news: NewsMainCard[];
  status: Status;
};

const initialState: AppState = {
  news: [],
  status: "idle",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPopularNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getPopularNews.fulfilled,
        (state, action: PayloadAction<{ data: NewsMainCard[] }>) => {
          state.status = "idle";
          state.news = action.payload.data;
        }
      )
      .addCase(getPopularNews.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const newsReducer = newsSlice.reducer;
