import { ReviewCarFilter } from "Components/Article/ReviewCarFilter";
import { useCarReviews } from "./useCarReviews";
import { ReviewCarList } from "Components/Article/ReviewCarList";
import { PaginationBox } from "Components/Pagination";

export const CarReviews = () => {
  const {
    cars,
    model,
    models,
    brand,
    brandList,
    total,
    status,
    style,
    pagination,
    onSetBrand,
    onSetModel,
    handleChangePagination,
  } = useCarReviews();

  return (
    <>
      <ReviewCarFilter
        brand={brand}
        brands={brandList}
        model={model}
        models={models}
        onSetModel={onSetModel}
        onSetBrand={onSetBrand}
      />
      <ReviewCarList cars={cars} status={status} />

      <PaginationBox
        page={pagination}
        onChange={handleChangePagination}
        count={total}
        style={style}
      />
    </>
  );
};
