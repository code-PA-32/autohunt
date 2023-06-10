import { useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";

import { currentUserSelector } from "../Login/loginUserSelectors";
import { useAppDispatch } from "store";
import { getUserLikedCars } from "../UserCars/userCarsSlice";
import { userCarsSelector } from "../UserCars/userCarsSelector";
import { setUserLikedCars } from "../UserCars/userCarsSlice";
import {
  getUsersChats,
  likeCar,
  setUserPhoto,
  updateUserData,
} from "../userSlice";
import { deleteLikedCar } from "../UserCars/userCarsSlice";
import { unreadMessagesLength } from "../UserChats/userChatsSlice";

interface UpdateUserData {
  name: string;
  phone: number;
}

export const useProfile = () => {
  const { user, logged } = useSelector(currentUserSelector);
  const { likedCars } = useSelector(userCarsSelector);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (logged && user.likedCars?.length !== 0) {
      user.likedCars && dispatch(getUserLikedCars(user.likedCars));
      dispatch(getUsersChats(user.userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.likedCars?.length, dispatch, logged, user.likedCars]);

  useEffect(() => {
    if (logged) {
      dispatch(unreadMessagesLength(user.userId));
      dispatch(
        setUserLikedCars({ id: user.userId, userLikedCarsIds: user.likedCars! })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.likedCars?.length]);

  const setLikedCar = (id: string): void => {
    dispatch(likeCar(id));
    dispatch(deleteLikedCar(id));
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onEditPhoto = () => {
    setEdit(!edit);
  };
  const onEditUser = () => {
    setEditUser(!editUser);
  };

  const isLiked = (id: string): boolean => {
    return user.likedCars!.some((c) => c === id);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const userPhoto = event.target.files?.[0];
    if (userPhoto) {
      const formData = new FormData();
      formData.append("image", userPhoto);
      dispatch(setUserPhoto({ id: user.userId, image: formData }));
      onEditPhoto();
    }
  };

  const updateUser = (values: UpdateUserData) => {
    const updateUserPayload = {
      name: values.name,
      phone: values.phone,
      id: user.userId,
    };
    console.log(updateUserPayload);
    dispatch(updateUserData(updateUserPayload));
    onEditUser();
  };

  return {
    user,
    logged,
    likedCars,
    setLikedCar,
    isLiked,
    edit,
    onEditPhoto,
    handleImageChange,
    updateUser,
    onEditUser,
    editUser,
    handleClose,
    open,
  };
};
