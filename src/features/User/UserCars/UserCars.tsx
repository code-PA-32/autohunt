import { ProfileLink, UserCarList } from "Components/UserComponents";
import { useUserCars } from "./useUserCars";

export const UserCars = () => {
  const { user, sellCars, onEditCar, onDeleteCar } = useUserCars();

  return (
    <>
      <ProfileLink isAdmin={user.isAdmin} />
      <UserCarList
        cars={sellCars!}
        onEditCar={onEditCar}
        onDeleteCar={onDeleteCar}
      />
    </>
  );
};
