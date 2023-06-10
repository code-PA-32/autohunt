import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { useRecommendedCars } from "./use-recommendedCars";
import { GridCardMain } from "Components/CarComponents/GridCardMain";
import { CarSkeleton } from "Components/CarComponents/Skeleton";
import { CardCars } from "types";

export const RecommendedCars = () => {
  const [newCars, setNewCars] = useState(true);
  const { status, newRecommended, usedRecommended } = useRecommendedCars();

  const renderCars = (
    arrNew: CardCars[],
    arrUsed: CardCars[],
    state: boolean
  ): ReactNode => {
    if (state) {
      return (
        arrNew &&
        arrNew.map((item) => (
          <GridCardMain
            key={item.id}
            carDetails={"search-results"}
            carReview={"article/reviews"}
            {...item}
          />
        ))
      );
    } else {
      return (
        arrUsed &&
        arrUsed.map((item) => (
          <GridCardMain
            {...item}
            key={item.id}
            carDetails="search-results"
            carReview="article/reviews"
          />
        ))
      );
    }
  };

  if (status === "loading") {
    return <CarSkeleton length={3} className="flex" />;
  }

  if (status === "error") {
    return <h2>Some error in loading data</h2>;
  }

  return (
    <section className="recommended">
      <h2>Recommended Cars</h2>
      <div className="recommended-selection">
        <div className="recommended-selection-buttons">
          <button
            className={newCars === true ? "active-select-button" : ""}
            onClick={() => setNewCars(true)}
          >
            New
          </button>
          <button
            className={newCars === false ? "active-select-button" : ""}
            onClick={() => setNewCars(false)}
          >
            Used
          </button>
        </div>
        <Link to={`${newCars ? "/new-cars" : "/used-cars"}`}>
          <span>See more</span>
          <ArrowForwardIosRoundedIcon fontSize="inherit" />
        </Link>
      </div>
      <ul className="recommended-list">
        {renderCars(newRecommended, usedRecommended, newCars)}
      </ul>
    </section>
  );
};
