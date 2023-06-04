import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ADD_CAR_REVIEW, DELETE_CAR_REVIEW, GET_REVIEW_DETAILS } from "config";
import { CarReview, Status, PostRating, Rating, AvrCarRating } from "types";

type ReviewAppState = {
  car: CarReview;
  status: Status;
};

export const getReviewDetails = createAsyncThunk<{ data: CarReview }, string>(
  "carReviewDetails/getDetails",
  async (id: string) => {
    return await axios.get(GET_REVIEW_DETAILS(id));
  }
);

export const postNewComment = createAsyncThunk<
  { data: { rating: Rating; avrRating: AvrCarRating } },
  PostRating
>("carReviewDetails/postComment", async (data: PostRating) => {
  return await axios.post(ADD_CAR_REVIEW, data);
});

export const deleteComment = createAsyncThunk<
  { data: { avrRating: AvrCarRating; commentId: string } },
  { carId: string; commentId: string }
>(
  "carReviewDetails/deleteComment",
  async (data: { carId: string; commentId: string }) => {
    return await axios.post(DELETE_CAR_REVIEW, data);
  }
);

const initialState: ReviewAppState = {
  car: {
    id: "",
    src: [],
    price: 0,
    avrRating: {
      Comfort: 0,
      Design: 0,
      Performance: 0,
      Price: 0,
      Reliability: 0,
    },
    rating: [],
    details: {
      brand: "",
      model: "",
    },
  },
  status: "idle",
};

const carReviewDetailsSlice = createSlice({
  name: "carReviewDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getReviewDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getReviewDetails.fulfilled,
        (state, action: PayloadAction<{ data: CarReview }>) => {
          state.car = action.payload.data;
          state.status = "idle";
        }
      )
      .addCase(getReviewDetails.rejected, (state) => {
        state.status = "error";
      })
      .addCase(postNewComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        postNewComment.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: { avrRating: AvrCarRating; rating: Rating };
          }>
        ) => {
          state.status = "idle";
          state.car.avrRating = action.payload.data.avrRating;
          state.car.rating.push(action.payload.data.rating);
        }
      )
      .addCase(postNewComment.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deleteComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.car.avrRating = action.payload.data.avrRating;
        state.car.rating = state.car.rating.filter(
          (r) => r.id !== action.payload.data.commentId
        );
      });
  },
});

export const carReviewDetailsReducer = carReviewDetailsSlice.reducer;
