import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { carReviewDetailsSelector } from "./carReviewDetailsSelector";
import { useAppDispatch } from "store";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import {
  deleteComment,
  getReviewDetails,
  postNewComment,
} from "./carReviewDetailsSlice";
import { currentUserSelector } from "features/User/Login/loginUserSelectors";

const initState = {
  Comfort: 0,
  Design: 0,
  Performance: 0,
  Price: 0,
  Reliability: 0,
};

export const useCarReviewDetails = () => {
  const { carId } = useParams();
  const dispatch = useAppDispatch();
  const {
    user: { name, userId, photo },
    logged,
  } = useSelector(currentUserSelector);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { car } = useSelector(carReviewDetailsSelector);
  const [revRating, setRevRating] = useState(initState);
  const [comment, setComment] = useState("");

  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? car.src.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === car.src.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (carId) dispatch(getReviewDetails(carId));
  }, [dispatch, carId]);

  const setRating = (
    event: SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setRevRating((prev) => ({
      ...prev,
      [(event.target as HTMLInputElement).name]: value,
    }));
  };

  const setRevComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (carId) {
      const newPost = {
        date: new Date().getTime(),
        photo,
        name,
        userId,
        stared: revRating,
        carId,
        rev: comment,
      };
      dispatch(postNewComment(newPost));
    }
    setComment("");
    setRevRating(initState);
  };

  const onDeleteComment = (id: string) => {
    if (carId) dispatch(deleteComment({ carId, commentId: id }));
  };

  const length = car.rating.length || 0;

  return {
    car,
    revRating,
    setRating,
    setRevComment,
    comment,
    userId,
    logged,
    onSubmitComment,
    onDeleteComment,
    goNext,
    goPrev,
    goToSlide,
    currentIndex,
    length,
  };
};
