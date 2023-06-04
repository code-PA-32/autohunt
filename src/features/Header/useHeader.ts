import { init, setCondition } from "features/MainPageFilters/carFiltersSlice";
import { currentUserSelector } from "features/User/Login/loginUserSelectors";
import { userChatSelector } from "features/User/UserChats/userChatsSelector";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "store";

export const useHeader = () => {
  const dispatch = useAppDispatch();
  const location = useLocation().pathname;
  const { user, logged } = useSelector(currentUserSelector);
  const { length } = useSelector(userChatSelector);
  const handleResetFilters = () => {
    dispatch(init());
  };
  const handleSetNewCars = () => {
    dispatch(init());
    dispatch(setCondition(true));
  };
  const handleSetUsedCars = () => {
    dispatch(init());
    dispatch(setCondition(false));
  };
  console.log(length);
  const headerClass = (location: string) => {
    let clazz = "";
    switch (location) {
      case "/":
        return (clazz = "fade");
      case "/compare":
        return (clazz = "fade");
      default:
        return clazz;
    }
  };
  const clazz = headerClass(location);

  return {
    handleResetFilters,
    handleSetNewCars,
    handleSetUsedCars,
    clazz,
    userName: user.name,
    avatar: user.photo,
    logged,
    length,
  };
};
