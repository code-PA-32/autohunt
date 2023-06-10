import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "store";
import { productDetailsSelector } from "./productDetailsSelector";
import { getOneProduct, updateCarViews } from "./productDetailsSlice";
import { useCompareCars } from "features/CompareCarsPage/useCompareCarsPage";
import { useSearchCarList } from "features/SearchCarList/useSearchCarList";

export const useProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [height, setHeight] = useState(false);
  const [length, setLength] = useState(false);
  const { isInCompare } = useCompareCars();
  const { handleAddCompare } = useSearchCarList();

  const { status, product } = useSelector(productDetailsSelector);

  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? product.src.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === product.src.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const features = Object.keys(product.details.Futures).map((item) => item);

  const onSetDescriptionHeight = () => {
    setHeight(!height);
  };

  const onSetFeaturesLength = () => {
    setLength(!length);
  };

  useEffect(() => {
    if (id) {
      dispatch(getOneProduct(id));
      dispatch(updateCarViews(id));
    } else {
      return;
    }
  }, [id, dispatch]);

  let flag;
  if (id) flag = isInCompare(id);

  return {
    status,
    product,
    rating: product.rating,
    goPrev,
    goNext,
    goToSlide,
    currentIndex,
    features,
    height,
    length,
    onSetDescriptionHeight,
    onSetFeaturesLength,
    handleAddCompare,
    flag,
  };
};
