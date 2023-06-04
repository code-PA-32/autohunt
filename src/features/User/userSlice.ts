import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "types";
import { LoginUser, User } from "types/user";
import {
  CREATE_USER,
  GET_USERS_CHATS,
  LOGIN_USER,
  SET_USER_PHOTO,
  UPDATE_USER_DATA,
} from "config";
import axios from "axios";

export const createUser = createAsyncThunk<
  { data: User },
  User,
  {
    state: { currentUser: AppState };
    rejectedValue: string;
  }
>(
  "currentUser/signup",
  async (user: User, { rejectWithValue }) => {
    try {
      return await axios.post(CREATE_USER, user);
    } catch (e) {
      return rejectWithValue(e);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        currentUser: { status },
      } = getState();
      if (status === "loading") {
        return false;
      }
    },
  }
);

export const loginUser = createAsyncThunk<
  { data: User },
  LoginUser,
  {
    state: { currentUser: AppState };
    rejectedValue: string;
  }
>(
  "currentUser/login",
  async (user: LoginUser, { rejectWithValue }) => {
    try {
      return await axios.post(LOGIN_USER, user);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        currentUser: { status },
      } = getState();
      if (status === "loading") {
        return false;
      }
    },
  }
);

export const setUserPhoto = createAsyncThunk<
  string,
  { id: string; image: FormData },
  {
    rejectValue: { error: string };
  }
>("currentUser/photo", async (data: { id: string; image: FormData }) => {
  const response = await axios.put(SET_USER_PHOTO(data.id), data.image);
  return response.data;
});

export const updateUserData = createAsyncThunk<
  { name: string; phone: number },
  { id: string; name: string; phone: number }
>(
  "currentUser/updateData",
  async (user: { id: string; name: string; phone: number }) => {
    const response = await axios.put(UPDATE_USER_DATA(user.id), user);
    return response.data;
  }
);

export const getUsersChats = createAsyncThunk<{ data: string[] }, string>(
  "currentUser/getChats",
  async (id: string) => {
    return await axios.get(GET_USERS_CHATS(id));
  }
);

export type AppState = {
  user: User;
  status: Status;
  isLoggedIn: boolean;
  message: string;
};

const initialState: AppState = {
  user: {
    name: "",
    userId: "0",
    password: "",
    email: "",
    isAdmin: false,
    phone: 0,
    photo: "",
    chats: [],
  },
  status: "idle",
  isLoggedIn: false,
  message: "",
};

const currentUser = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    likeCar: {
      prepare: (carId: string) => {
        return { payload: carId };
      },
      reducer: (state, action: PayloadAction<string>) => {
        const carId = action.payload;

        if (state.user.likedCars?.includes(carId)) {
          state.user.likedCars = state.user.likedCars.filter(
            (id) => id !== carId,
            (state.message = "Car deleted")
          );
          return;
        }

        state.user.likedCars?.push(carId);
        state.message = "Car Added";
      },
    },
    addChatId: {
      prepare: (chatId: string) => {
        return { payload: chatId };
      },
      reducer: (state, action: PayloadAction<string>) => {
        const chatId = action.payload;
        if (state.user.chats?.includes(chatId)) {
          return;
        }
        state.user.chats?.push(chatId);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload as string;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ data: User }>) => {
          console.log(action.payload);
          state.user = action.payload.data;
          state.status = "idle";
        }
      )
      .addCase(setUserPhoto.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        setUserPhoto.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "idle";
          state.user.photo = action.payload;
        }
      )
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
        state.message = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.message = action.payload as string;
        state.status = "error";
      })
      .addCase(
        createUser.fulfilled,
        (state, action: PayloadAction<{ data: User }>) => {
          state.user = action.payload.data;
          state.message = "";
          state.status = "idle";
        }
      )
      .addCase(updateUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.status = "idle";
        state.user.name = action.payload.name;
        state.user.phone = action.payload.phone;
      })
      .addCase(getUsersChats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getUsersChats.fulfilled,
        (state, action: PayloadAction<{ data: string[] }>) => {
          state.user.chats = action.payload.data;
        }
      );
  },
});

export const currentUserReducer = currentUser.reducer;
export const { setLogged, likeCar, addChatId } = currentUser.actions;
