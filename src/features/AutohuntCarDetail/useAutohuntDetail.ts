import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { autohuntCarDetailsSelector } from "./autohuntDetailSelector";
import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import {
  PostComment,
  addAutohuntComment,
  deleteAutohuntComment,
  getAutohuntCarDetails,
} from "./autohuntCarDetailSlice";
import { currentUserSelector } from "features/User/Login/loginUserSelectors";

export const useAutohuntCarDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const { car } = useSelector(autohuntCarDetailsSelector);
  const {
    user: { userId, name, photo },
    logged,
  } = useSelector(currentUserSelector);
  useEffect(() => {
    if (id) dispatch(getAutohuntCarDetails(id));
  }, [dispatch, id]);

  const setCommentText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToPost: PostComment = {
      name,
      photo,
      text,
      userId,
      reviewId: car.reviewId,
    };
    dispatch(addAutohuntComment(dataToPost));
    setText("");
  };

  const handleDeleteComment = (commentId: string) => {
    const reviewId = car.reviewId;
    dispatch(deleteAutohuntComment({ reviewId, commentId }));
  };

  return {
    car,
    logged,
    text,
    setCommentText,
    handleSubmitComment,
    userId,
    handleDeleteComment,
  };
};
