import "./reviewCarList.scss";
import { CardCars } from "types";
import { GridCarCard } from "Components/CarComponents/GridCarCard";
import { CarSkeleton } from "Components/CarComponents/Skeleton";

interface ReviewCarListProps {
  cars: CardCars[];
  status: string;
}
export const ReviewCarList = ({ cars, status }: ReviewCarListProps) => {
  if (status === "loading") {
    return <CarSkeleton length={6} className="review_list" />;
  }

  return (
    <ul className="review_list">
      {cars &&
        cars.map((car) => (
          <GridCarCard
            carReview="article/reviews"
            key={car.id}
            {...car}
            carDetails="article/reviews"
          />
        ))}
    </ul>
  );
};
