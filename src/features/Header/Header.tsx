import { Header } from "Components/Header";
import { useHeader } from "./useHeader";

export const HeaderContainer = () => {
  const {
    clazz,
    handleResetFilters,
    handleSetNewCars,
    handleSetUsedCars,
    logged,
    userName,
    avatar,length
  } = useHeader();
  return (
    <Header
      className={clazz}
      onFilterReset={handleResetFilters}
      onSetNewCars={handleSetNewCars}
      onSetUsedCars={handleSetUsedCars}
      logged={logged}
      userName={userName}
      avatar={avatar}
      length={length}
    />
  );
};
