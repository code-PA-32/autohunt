import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ADD_NEW_COMMENT, DELETE_NEW_COMMENT, GET_NEWS_INFO } from "config";
import { Comment, NewsInfo, Status } from "types";

export const getNewsInfo = createAsyncThunk<{ data: NewsInfo }, string>(
  "newsInfo/getInfo",
  async (id: string) => {
    return await axios.get(GET_NEWS_INFO(id));
  }
);

export const addNewsComment = createAsyncThunk<
  { data: Comment },
  CommentToPost
>("newsInfo/addComment", async (data: CommentToPost) => {
  return await axios.post(ADD_NEW_COMMENT, data);
});

export const deleteNewsComment = createAsyncThunk<
  { data: string },
  { commentId: string; newsId: string }
>(
  "newsInfo/deleteComment",
  async (data: { commentId: string; newsId: string }) => {
    return await axios.post(DELETE_NEW_COMMENT, data);
  }
);

export type CommentToPost = {
  name: string;
  photo: string;
  userId: string;
  text: string;
  newsId: string;
};

type AppState = {
  newsInfo: NewsInfo;
  status: Status;
};

const initialState: AppState = {
  newsInfo: {
    id: "",
    time: "",
    title: "",
    image: "",
    image2: "",
    text: "",
    text2: "",
    tags: [],
    expert: {
      name: "",
      photo: "",
      phone: "",
      email: "",
    },
    comments: [],
  },
  status: "idle",
};

const newsInfoSlice = createSlice({
  name: "newsInfo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNewsInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getNewsInfo.fulfilled,
        (state, action: PayloadAction<{ data: NewsInfo }>) => {
          state.status = "idle";
          state.newsInfo = action.payload.data;
        }
      )
      .addCase(getNewsInfo.rejected, (state) => {
        state.status = "error";
      })
      .addCase(addNewsComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        addNewsComment.fulfilled,
        (state, action: PayloadAction<{ data: Comment }>) => {
          state.status = "idle";
          state.newsInfo.comments.push(action.payload.data);
        }
      )
      .addCase(addNewsComment.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deleteNewsComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteNewsComment.fulfilled,
        (state, action: PayloadAction<{ data: string }>) => {
          state.status = "idle";
          state.newsInfo.comments = state.newsInfo.comments.filter(
            (c) => c._id !== action.payload.data
          );
        }
      )
      .addCase(deleteNewsComment.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const newsInfoReducer = newsInfoSlice.reducer;
