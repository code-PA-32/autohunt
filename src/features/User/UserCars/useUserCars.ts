import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { currentUserSelector } from "../Login/loginUserSelectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUserCar, getUserCars } from "./userCarsSlice";
import { userCarsSelector } from "./userCarsSelector";
import { getCarToUpdate } from "features/SellCar/sellCarSlice";

export const useUserCars = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(currentUserSelector);
  const { sellCars } = useSelector(userCarsSelector);

  useEffect(() => {
    dispatch(getUserCars(user.userId));
  }, [dispatch, user.userId]);

  const onEditCar = (car: string) => {
    dispatch(getCarToUpdate(car));
    navigate("/sell");
  };

  const onDeleteCar = (id: string) => {
    dispatch(deleteUserCar(id));
    dispatch(getUserCars(user.userId));
  };

  return {
    user,
    sellCars,
    onEditCar,
    onDeleteCar,
  };
};
