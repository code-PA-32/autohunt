import "./compareCars.scss";
import { BlindCard } from "Components/CarComponents/BlindCard";
import { useCompareCars } from "./useCompareCarsPage";
import { GridCarCard } from "Components/CarComponents/GridCarCard";
import { CompareCarsAccordion } from "Components/CarComponents/CompareCarsAccordion";

export const CompareCarsPage = () => {
  const {
    cars,
    handleRemoveCompare,
    isInCompare,
    currentImage,
    setViewer,
    viewerImg,
    arrayIndex,
    setArrayIndex,
    setCloseViewer,
  } = useCompareCars();

  return (
    <>
      <div className="compare_car_page">
        <ul className="compare_car_page-list">
          {cars.length >= 1
            ? cars.map((item) => {
                return (
                  <GridCarCard
                    carDetails={"search-results"}
                    carReview={"article/reviews"}
                    isInCompare={isInCompare}
                    deleteCompare={handleRemoveCompare}
                    {...item}
                    key={item.id}
                  />
                );
              })
            : null}
          {cars.length === 3 ? null : <BlindCard />}
        </ul>
      </div>
      <CompareCarsAccordion
        cars={cars}
        viewerImg={viewerImg}
        setViewer={setViewer}
        arrIndex={arrayIndex}
        setCloseViewer={setCloseViewer}
        setArrayIndex={setArrayIndex}
        currentImage={currentImage}
      />
    </>
  );
};
