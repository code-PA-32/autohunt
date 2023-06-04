import { useSelector } from "react-redux";
import { sellCarSelector } from "./sellCarSelector";
import { useAppDispatch } from "store";
import { currentUserSelector } from "features/User/Login/loginUserSelectors";
import { postCar } from "./sellCarSlice";

export const useSellCar = () => {
  const dispatch = useAppDispatch();
  const { car } = useSelector(sellCarSelector);
  const { user, logged } = useSelector(currentUserSelector);

  const onCarSell = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const carToSell = {
      ...car,
      saleId: user.userId,
      dealer: user.userId,
    };
    console.log(carToSell);
    dispatch(postCar(carToSell));
  };
  console.log(car);
  return {
    car,
    onCarSell,
    logged,
  };
};
