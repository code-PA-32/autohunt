import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useAppDispatch } from "store";
import { userMessagesSelector } from "./userMessagesSelector";
import { currentUserSelector } from "../Login/loginUserSelectors";
import {
  getChatMessages,
  sentMessage,
  updateMessagesStatus,
} from "./userMessagesSlice";
import { dataURLtoFile } from "utils";
import { Message } from "types/chat";
import { unreadMessagesLength } from "./userChatsSlice";

export const useUserMessage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { messages, status } = useSelector(userMessagesSelector);
  const { user, logged } = useSelector(currentUserSelector);
  const [text, setText] = useState("");
  const [imageData, setImageData] = useState<string | null>(null);

  const getUserUnreadMessages = (messages: Message[]) => {
    return messages
      .map((m) => {
        if (m.receiverId === user.userId && m.status === false) {
          return m.id;
        }
        return undefined;
      })
      .filter((value) => typeof value === "string") as string[];
  };

  const unreadMessages = getUserUnreadMessages(messages);
  const updateMessages = {
    messageIds: unreadMessages,
    chatId: id!,
  };

  useEffect(() => {
    if (unreadMessages.length !== 0 && id) {
      dispatch(updateMessagesStatus(updateMessages));
    }
    return () => {
      dispatch(unreadMessagesLength(user.userId));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unreadMessages.length]);

  useEffect(() => {
    if (logged && id) dispatch(getChatMessages(id));
  }, [id, logged, dispatch]);

  const onSetText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target?.result as string;
        setImageData(base64Data);
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const senderId = user.userId;
    const receiverId =
      messages[0].receiverId === user.userId
        ? messages[0].senderId
        : messages[0].receiverId;

    const formData = new FormData();
    formData.append("text", text);
    formData.append("chatId", id!);
    formData.append("senderId", senderId);
    formData.append("receiverId", receiverId);
    if (imageData !== null) {
      const base64Image = dataURLtoFile(imageData, "chat");
      formData.append("image", base64Image);
    }
    dispatch(sentMessage(formData));
    setImageData(null);
    setText("");
  };

  return {
    messages,
    status,
    userId: user.userId,
    onSetImage,
    imageData,
    onSetText,
    text,
    onSubmit,
  };
};
