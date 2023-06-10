import { Link } from "react-router-dom";

import { GridCardMain } from "Components/CarComponents/GridCardMain";
import { CardCars } from "types";

import "./likedCars.scss";

interface LikedCarsProps {
  cars: Array<CardCars>;
  isLiked: (id: string) => boolean;
  setLikedCar: (id: string) => void;
  user: boolean;
}

export const LikedCars = ({
  cars,
  isLiked,
  setLikedCar,
  user,
}: LikedCarsProps) => {
  if (cars && cars.length === 0) {
    return (
      <div className="message">
        <span>You have no liked cars</span>
        <Link to={"/search-results"}>Add some?</Link>
      </div>
    );
  }

  return (
    <ul className="car_list">
      {cars &&
        cars.map((car) => (
          <GridCardMain
            key={car.id}
            {...car}
            isLiked={isLiked}
            user={user}
            setLikedCar={setLikedCar}
          />
        ))}
    </ul>
  );
};
