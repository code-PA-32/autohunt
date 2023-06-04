import { GridCarCard } from "Components/CarComponents/GridCarCard";
import { useAutohuntReviews } from "./useAutohuntReviews";
import { CarSkeleton } from "Components/CarComponents/Skeleton";

export const AutohuntReviews = () => {
  const { cars, status } = useAutohuntReviews();

  if (status === "loading") {
    return <CarSkeleton length={9} className="autohunt_cars" />;
  }

  return (
    <ul className="autohunt_cars">
      {cars.map((car) => (
        <GridCarCard
          {...car}
          key={car.id}
          carDetails="article/autohunt"
          carReview="article/reviews"
        />
      ))}
    </ul>
  );
};
