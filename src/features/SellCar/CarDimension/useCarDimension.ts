import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { sellCarSelector } from "../sellCarSelector";
import { setCargo, setHeight, setLength, setWidth } from "../sellCarSlice";
import { ChangeEvent } from "react";
export const useCarDimension = () => {
  const dispatch = useAppDispatch();
  const { car } = useSelector(sellCarSelector);

  const {
    Length,
    Width,
    Height,
    "Cargo Volume": cargo,
  } = car.details.Dimension;

  const handleChangeLength = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLength(e.target.value));
  };
  const handleChangeWidth = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setWidth(e.target.value));
  };
  const handleChangeHeight = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeight(e.target.value));
  };
  const handleChangeCargo = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCargo(e.target.value));
  };
  return {
    Length,
    Width,
    Height,
    cargo,
    handleChangeLength,
    handleChangeWidth,
    handleChangeHeight,
    handleChangeCargo,
  };
};
