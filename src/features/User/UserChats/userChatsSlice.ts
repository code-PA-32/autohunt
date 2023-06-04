import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CREATE_UPDATE_CHAT,
  GET_UNREAD_MESSAGES_LENGTH,
  GET_USER_CHAT_INFO,
} from "config";
import { Status } from "types";
import { Chat, CreateChat } from "types/chat";

export const createUpdateChat = createAsyncThunk<{ data: string }, CreateChat>(
  "userChats/createUpdate",
  async (data: CreateChat) => {
    const response = await axios.post(CREATE_UPDATE_CHAT, data);
    return { data: response.data };
  }
);

export const getMessagesInfo = createAsyncThunk<{ data: Chat[] }, string>(
  "userChats/getMessages",
  async (id: string) => {
    return await axios.get(GET_USER_CHAT_INFO(id));
  }
);

export const unreadMessagesLength = createAsyncThunk<{ data: number }, string>(
  "userChats/unreadLength",
  async (id: string) => {
    return await axios.get(GET_UNREAD_MESSAGES_LENGTH(id));
  }
);

type AppState = {
  status: Status;
  chats: Chat[];
  unreadMessages: number;
};

const initialState: AppState = {
  status: "idle",
  chats: [],
  unreadMessages: 0,
};

const userChatsSlice = createSlice({
  name: "userChats",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMessagesInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getMessagesInfo.fulfilled,
        (state, action: PayloadAction<{ data: Chat[] }>) => {
          state.status = "idle";
          state.chats = action.payload.data;
        }
      )
      .addCase(unreadMessagesLength.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        unreadMessagesLength.fulfilled,
        (state, action: PayloadAction<{ data: number }>) => {
          state.status = "idle";
          state.unreadMessages = action.payload.data;
        }
      );
  },
});

export const userChatReducer = userChatsSlice.reducer;
