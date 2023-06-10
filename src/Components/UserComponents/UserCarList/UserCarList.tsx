import { GridCardMain } from "Components/CarComponents/GridCardMain";
import { Link } from "react-router-dom";
import { CardCars } from "types";

import "./userCarList.scss";

interface UserCarsProps {
  cars: Array<CardCars>;
  onEditCar: (car: string) => void;
  onDeleteCar: (id: string) => void;
}

export const UserCarList = ({
  cars,
  onEditCar,
  onDeleteCar,
}: UserCarsProps) => {
  if (cars && cars.length === 0) {
    return (
      <div className="message">
        <span>You have no cars on sale</span>
        <Link to={"/sell"}>Add some?</Link>
      </div>
    );
  }

  return (
    <ul className="car_list">
      {cars &&
        cars.map((car) => (
          <GridCardMain
            key={car.id}
            carDetails="search-results"
            {...car}
            canEdit
            canDelete
            onEditCar={onEditCar}
            onDeleteCar={onDeleteCar}
          />
        ))}
    </ul>
  );
};
