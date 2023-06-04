import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_CHAT_MESSAGES,
  SEND_CHAT_MESSAGE,
  UPDATE_MESSAGES_STATUS,
} from "config";
import { Status } from "types";
import { Message } from "types/chat";

export const getChatMessages = createAsyncThunk<{ data: Message[] }, string>(
  "userMessages/messageList",
  async (id: string) => {
    return await axios.get(GET_CHAT_MESSAGES(id));
  }
);

export const sentMessage = createAsyncThunk<{ data: Message }, FormData>(
  "userMessages/sendMessage",
  async (data: FormData) => {
    return await axios.post(SEND_CHAT_MESSAGE, data);
  }
);

export const updateMessagesStatus = createAsyncThunk<
  { data: string[] },
  { messageIds: string[]; chatId: string }
>(
  "userMessages/updateStatus",
  async (data: { messageIds: string[]; chatId: string }) => {
    return await axios.patch(UPDATE_MESSAGES_STATUS, data);
  }
);

type AppState = {
  messages: Message[];
  status: Status;
};

const initialState: AppState = {
  messages: [],
  status: "idle",
};

const userMessagesSlice = createSlice({
  name: "userMessages",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getChatMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getChatMessages.fulfilled,
        (state, action: PayloadAction<{ data: Message[] }>) => {
          state.status = "idle";
          state.messages = action.payload.data;
        }
      )
      .addCase(getChatMessages.rejected, (state) => {
        state.status = "error";
      })
      .addCase(sentMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        sentMessage.fulfilled,
        (state, action: PayloadAction<{ data: Message }>) => {
          state.status = "idle";
          state.messages.push(action.payload.data);
        }
      )
      .addCase(sentMessage.rejected, (state) => {
        state.status = "error";
      })
      .addCase(updateMessagesStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateMessagesStatus.fulfilled,
        (state, action: PayloadAction<{ data: string[] }>) => {
          const messageIds = action.payload.data;
          state.messages = state.messages.map((m) => {
            if (messageIds.includes(m.id)) {
              return { ...m, status: true };
            }
            return m;
          });
          state.status = "idle";
        }
      )
      .addCase(updateMessagesStatus.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const userMessagesReducer = userMessagesSlice.reducer;
