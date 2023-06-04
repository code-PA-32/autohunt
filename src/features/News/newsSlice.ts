import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_ALL_NEWS } from "config";
import { NewsPageCard, Status } from "types";

export const getAllNews = createAsyncThunk<
  { data: NewsPageCard[] },
  { tags: string[]; term: string }
>("news/getAll", async (filters: { tags: string[]; term: string }) => {
  return await axios.post(GET_ALL_NEWS, filters);
});

type AppState = {
  news: NewsPageCard[];
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
      .addCase(getAllNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getAllNews.fulfilled,
        (state, action: PayloadAction<{ data: NewsPageCard[] }>) => {
          state.status = "idle";
          state.news = action.payload.data;
        }
      )
      .addCase(getAllNews.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const newsPageReducer = newsSlice.reducer;
