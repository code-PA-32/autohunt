import { useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  addNewsComment,
  deleteNewsComment,
  getNewsInfo,
} from "./newsInfoSlice";
import { useAppDispatch } from "store";
import { newsInfoSelector } from "./newsInfoSelector";
import { currentUserSelector } from "features/User/Login/loginUserSelectors";

export const useNewsInfo = () => {
  const dispatch = useAppDispatch();
  const [newsText, setNewsText] = useState("");
  const { id } = useParams();
  const { newsInfo, status } = useSelector(newsInfoSelector);
  const { user, logged } = useSelector(currentUserSelector);

  useEffect(() => {
    if (id) dispatch(getNewsInfo(id));
  }, [dispatch, id]);

  const handleSetNewsText = (e: ChangeEvent<HTMLInputElement>) => {
    setNewsText(e.target.value);
  };

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      const data = {
        text: newsText,
        name: user.name,
        photo: user.photo,
        userId: user.userId,
        newsId: id,
      };
      dispatch(addNewsComment(data));
      setNewsText("");
    }
  };

  const handleDeleteComment = (commentId: string) => {
    if (id) dispatch(deleteNewsComment({ commentId, newsId: id }));
  };

  return {
    newsInfo,
    status,
    user,
    logged,
    newsText,
    handleSetNewsText,
    handleAddComment,
    handleDeleteComment,
  };
};
