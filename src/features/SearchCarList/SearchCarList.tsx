import "./searchCarList.scss";
import { useSearchCarList } from "./useSearchCarList";
import { GridCarCard } from "Components/CarComponents/GridCarCard";
import { FlexCarCard } from "Components/CarComponents/FlexCarCard";
import { useProfile } from "features/User/UserProfile/useProfile";
import { CarSkeleton } from "Components/CarComponents/Skeleton";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export const SearchCarList = () => {
  const { carList, isInCompare, handleAddCompare, view, status, message } =
    useSearchCarList();
  const { logged, isLiked, setLikedCar, open, handleClose } = useProfile();

  if (status === "loading") {
    return <CarSkeleton length={9} className={`car-list-${view}`} />;
  }

  return (
    <ul className={`car-list-${view}`}>
      {view === "grid"
        ? carList &&
          carList.map((car) => (
            <GridCarCard
              key={car.id}
              carDetails={"search-results"}
              carReview={"article/reviews"}
              addCompare={handleAddCompare}
              isInCompare={isInCompare}
              user={logged}
              setLikedCar={setLikedCar}
              isLiked={isLiked}
              {...car}
            />
          ))
        : carList &&
          carList.map((car) => (
            <FlexCarCard
              key={car.id}
              carDetails={"search-results"}
              carReview={"article/reviews"}
              addCompare={handleAddCompare}
              isInCompare={isInCompare}
              user={logged}
              setLikedCar={setLikedCar}
              isLiked={isLiked}
              {...car}
            />
          ))}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </ul>
  );
};
