import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_USERS_CAR, GET_USER_LIKED_CARS, SET_LIKED_CARS } from "config";
import { Status, CardCars } from "types";

export const deleteUserCar = createAsyncThunk(
  "userCars/delete",
  async (id: string) => {}
);

export const getUserLikedCars = createAsyncThunk<
  { data: CardCars[] },
  string[]
>("userCars/likedCars", async (likedCars: string[]) => {
  return await axios.post(GET_USER_LIKED_CARS, likedCars);
});

export const getUserCars = createAsyncThunk<{ data: CardCars[] }, string>(
  "userCars/getCars",
  async (userId: string) => {
    return await axios.get(GET_USERS_CAR(userId));
  }
);

export const setUserLikedCars = createAsyncThunk(
  "userCars/setLiked",
  async (user: { id: string; userLikedCarsIds: string[] }) => {
    return await axios.put(SET_LIKED_CARS(user.id), user.userLikedCarsIds);
  }
);

type UserCars = {
  userCars: CardCars[];
  userLikedCars: CardCars[];
  status: Status;
};

const initialState: UserCars = {
  userCars: [],
  userLikedCars: [],
  status: "idle",
};

const userCarsSlice = createSlice({
  name: "userCars",
  initialState,
  reducers: {
    deleteLikedCar: {
      prepare: (carId: string) => {
        return { payload: carId };
      },
      reducer: (state, action: PayloadAction<string>) => {
        const carId = action.payload;

        state.userLikedCars = state.userLikedCars.filter(
          (car) => car.id !== carId
        );
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getUserLikedCars.fulfilled,
        (state, action: PayloadAction<{ data: CardCars[] }>) => {
          state.userLikedCars = action.payload.data;
          state.status = "loading";
        }
      )
      .addCase(
        getUserCars.fulfilled,
        (state, action: PayloadAction<{ data: CardCars[] }>) => {
          state.userCars = action.payload.data;
          state.status = "idle";
        }
      )
      .addCase(setUserLikedCars.rejected, (state) => {
        state.status = "error";
      })
      .addCase(setUserLikedCars.fulfilled, (state) => {
        state.status = "idle";
      });
  },
});

export const userCarsReducer = userCarsSlice.reducer;
export const { deleteLikedCar } = userCarsSlice.actions;
