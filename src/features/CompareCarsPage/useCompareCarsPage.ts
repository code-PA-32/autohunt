import { compareCarsSelector } from "features/CompareCars/compareCarsSelector";
import {
  deleteCompareCar,
  getCompareByIds,
} from "features/CompareCars/compareCarsSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";

export const useCompareCars = () => {
  const dispatch = useAppDispatch();
  const { status, cars } = useSelector(compareCarsSelector);
  const { list } = useSelector(compareCarsSelector);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerImg, setViewerImg] = useState(false);
  const [arrayIndex, setArrayIndex] = useState(0);

  const handleRemoveCompare = (id: string): void => {
    dispatch(deleteCompareCar(id));
  };
  const isInCompare = (id: string): boolean => {
    return cars.some((car) => car.id === id);
  };
  useEffect(() => {
    dispatch(getCompareByIds(list));
  }, [list, dispatch]);

  const setViewer = (index: number) => {
    setCurrentImage(index);
    setViewerImg(true);
  };
  const setCloseViewer = () => {
    setCurrentImage(0);
    setViewerImg(false);
  };

  return {
    cars,
    status,
    handleRemoveCompare,
    isInCompare,
    currentImage,
    setViewer,
    viewerImg,
    arrayIndex,
    setArrayIndex,
    setCloseViewer,
  };
};
