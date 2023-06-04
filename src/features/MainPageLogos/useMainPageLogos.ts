import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { mainPageLogosSelector } from "./mainPageLogosSelector";
import { useEffect } from "react";
import { getPageLogos } from "./mainPageLogosSlice";
import { setBrand } from "features/MainPageFilters/carFiltersSlice";
import { useNavigate } from "react-router-dom";

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
