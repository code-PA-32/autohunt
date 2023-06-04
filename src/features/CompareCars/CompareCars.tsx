import { CardCars } from "types";
import "./compareCars.scss";
import { useCompare } from "./use-сompareCars";
import { Link } from "react-router-dom";

import { GridCardMain } from "Components/CarComponents/GridCardMain";

export const CompareCars = () => {
  const { cars, status } = useCompare();

  const errorText = <h2>Error with loading data</h2>;

  const carList = (car: CardCars[]) => {
    return (
      car &&
      car
        .slice(0, 2)
        .map((item) => (
          <GridCardMain
            key={item.id}
            carDetails={"search-results"}
            carReview={"article/reviews"}
            {...item}
          />
        ))
    );
  };

  return (
    <>
      {status === "error" && errorText}
      {status === "idle" && (
        <div
          //   className={visible ? "cars_to_compare" : "cars_to_compare fade"}
          className="cars_to_compare"
          //   ref={refContainer}
        >
          <h2>Compare Cars</h2>
          <ul className="cars_to_compare-list">{carList(cars)}</ul>
          <button className="cars_to_compare-button">
            <Link to={"/compare"}>Compare Cars</Link>
          </button>
        </div>
      )}
    </>
  );
};
