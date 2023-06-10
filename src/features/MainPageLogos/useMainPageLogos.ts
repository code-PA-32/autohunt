import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "store";
import { mainPageLogosSelector } from "./mainPageLogosSelector";
import { getPageLogos } from "./mainPageLogosSlice";
import { setBrand } from "features/MainPageFilters/carFiltersSlice";

export const useMainPageLogos = () => {
  const dispatch = useAppDispatch();
  const { logos, status } = useSelector(mainPageLogosSelector);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPageLogos());
  }, []);

  const onSetBrandFilter = (filter: string) => {
    dispatch(setBrand(filter));
    navigate("/search-results");
  };

  return {
    logos,
    status,
    onSetBrandFilter,
  };
};
