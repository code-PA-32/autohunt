import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "store";
import { currentUserSelector } from "../Login/loginUserSelectors";
import { userChatSelector } from "./userChatsSelector";
import { getMessagesInfo, unreadMessagesLength } from "./userChatsSlice";

export const useUserChats = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const { user, logged } = useSelector(currentUserSelector);
  const { status, chats } = useSelector(userChatSelector);

  const handleSetText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (logged) {
      dispatch(getMessagesInfo(user.userId));
      dispatch(unreadMessagesLength(user.userId));
    }
  }, [dispatch, logged]);

  return {
    user,
    status,
    chats,

    handleSetText,
    text,
  };
};
