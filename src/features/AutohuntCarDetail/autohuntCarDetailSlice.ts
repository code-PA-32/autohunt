import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADD_AUTOHUNT_COMMENT,
  DELETE_AUTOHUNT_COMMENT,
  GET_AUTOHUNT_CAR_DETAILS,
} from "config";
import { AutohuntCarDetail, Comment, Status } from "types";

export const getAutohuntCarDetails = createAsyncThunk<
  { data: AutohuntCarDetail },
  string
>("autohuntDetails/getCar", async (id: string) => {
  return await axios.get(GET_AUTOHUNT_CAR_DETAILS(id));
});

export const addAutohuntComment = createAsyncThunk<
  { data: Comment },
  PostComment
>("autohuntDetails/addComment", async (PostComment) => {
  return await axios.post(ADD_AUTOHUNT_COMMENT, PostComment);
});

export const deleteAutohuntComment = createAsyncThunk<
  { data: string },
  { reviewId: string; commentId: string }
>("autohuntDetails/deleteComment", async ({ reviewId, commentId }) => {
  return await axios.post(DELETE_AUTOHUNT_COMMENT, { reviewId, commentId });
});

type AppState = {
  car: AutohuntCarDetail;
  status: Status;
};

export type PostComment = {
  name: string;
  photo: string;
  text: string;
  userId: string;
  reviewId: string;
};

const initialState: AppState = {
  car: {
    car: "",
    id: "",
    img: "",
    price: "",
    video: "",
    intro: "",
    length: 0,
    reviewId: "",
    avrRating: {
      Comfort: 0,
      Design: 0,
      Performance: 0,
      Price: 0,
      Reliability: 0,
    },
    pros: [],
    cons: [],
    whatNew: [],
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

const autohuntCarDetailSlice = createSlice({
  name: "autohuntDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAutohuntCarDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getAutohuntCarDetails.fulfilled,
        (state, action: PayloadAction<{ data: AutohuntCarDetail }>) => {
          console.log(action.payload);
          state.car = action.payload.data;
          state.status = "idle";
        }
      )
      .addCase(getAutohuntCarDetails.rejected, (state) => {
        state.status = "error";
      })
      .addCase(addAutohuntComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        addAutohuntComment.fulfilled,
        (state, action: PayloadAction<{ data: Comment }>) => {
          state.car.comments.push(action.payload.data);
        }
      )
      .addCase(addAutohuntComment.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deleteAutohuntComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteAutohuntComment.fulfilled,
        (state, action: PayloadAction<{ data: string }>) => {
          state.car.comments = state.car.comments.filter(
            (c) => c._id !== action.payload.data
          );
          state.status = "idle";
        }
      )
      .addCase(deleteAutohuntComment.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const autohuntCarDetailReducer = autohuntCarDetailSlice.reducer;
